<!-- app/pages/recettes/index.vue -->
<template>
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="font-title font-bold text-3xl text-primary mb-2">
          {{ $t('recipes.title') }}
        </h1>
        <p class="text-gray-600">
          {{ $t('recipes.subtitle') }}
        </p>
      </div>
      
      <!-- Filtres -->
      <RecipeFilters @filter-change="handleFilterChange" />
      
      <!-- Résultats de recherche -->
      <div v-if="isLoading" class="py-12 text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        <p class="mt-4 text-gray-600">Chargement des recettes...</p>
      </div>
      
      <div v-else>
        <!-- Grille de recettes -->
        <RecipeGrid 
          :recipes="filteredRecipes" 
          @reset-filters="resetFilters"
          @add-to-calendar="handleAddToCalendar"
        />
        
        <!-- Pagination -->
        <div class="mt-8 flex justify-center" v-if="filteredRecipes.length > 0">
          <Button 
            v-if="hasMoreRecipes"
            variant="ghost" 
            @click="loadMore"
            :disabled="isLoadingMore"
          >
            <span v-if="isLoadingMore">Chargement...</span>
            <span v-else>Voir plus de recettes</span>
          </Button>
        </div>
      </div>
      
      <!-- Modal d'ajout au calendrier -->
      <div 
        v-if="showCalendarModal" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 class="font-title font-bold text-xl mb-4">
            {{ $t('recipes.add_to_calendar.title') }}
          </h3>
          <p class="mb-4">
            {{ $t('recipes.add_to_calendar.question') }}
            <strong v-if="selectedRecipe">{{ selectedRecipe.title }}</strong>?
          </p>
          <div class="mb-4">
            <input 
              type="date" 
              v-model="selectedDate"
              class="w-full px-3 py-2 rounded-xl border border-neutral focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div class="flex justify-end space-x-3">
            <Button variant="ghost" @click="showCalendarModal = false">
              {{ $t('recipes.add_to_calendar.cancel') }}
            </Button>
            <Button variant="primary" @click="confirmAddToCalendar">
              {{ $t('recipes.add_to_calendar.confirm') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useToastStore } from '../../store/toast'
  import { useRecipesStore } from '../../store/recipes'
  import Button from '../../components/ui/Button.vue'
  import RecipeFilters from '../../components/recipes/RecipeFilters.vue'
  import RecipeGrid from '../../components/recipes/RecipeGrid.vue'
  
  // Types
  interface Recipe {
    id: string;
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;
    prepTime: number;
    cookTime?: number;
    difficulty: 'easy' | 'medium' | 'hard';
    digestiveScore?: number;
    tags: string[];
    mealType: string;
    digestiveGoal: string;
  }
  
  interface Filters {
    durations: string[];
    mealTypes: string[];
    digestiveGoals: string[];
  }
  
  // Stores
  const toastStore = useToastStore()
  const recipesStore = useRecipesStore()
  
  // État
  const isLoading = ref(true)
  const isLoadingMore = ref(false)
  const page = ref(1)
  const perPage = ref(9)
  const hasMoreRecipes = ref(false)
  const filters = ref<Filters>({
    durations: [],
    mealTypes: [],
    digestiveGoals: []
  })
  
  // État pour le calendrier
  const showCalendarModal = ref(false)
  const selectedRecipe = ref<Recipe | null>(null)
  const selectedDate = ref('')
  
  // Charger les recettes à l'initialisation
  onMounted(async () => {
    try {
      await recipesStore.fetchRecipes()
      // Définir la date d'aujourd'hui comme valeur par défaut
      const today = new Date()
      selectedDate.value = today.toISOString().split('T')[0]
    } catch (error) {
      console.error('Erreur lors du chargement initial des recettes:', error)
      toastStore.error('Impossible de charger les recettes.')
    } finally {
      isLoading.value = false
    }
  })
  
  // Filtrer les recettes selon les critères
  const filteredRecipes = computed(() => {
    let result = [...recipesStore.recipes]
    
    // Filtrer par durée
    if (filters.value.durations.length > 0) {
      result = result.filter(recipe => {
        const totalTime = recipe.prepTime + (recipe.cookTime || 0)
        
        return filters.value.durations.some(duration => {
          if (duration === 'short') return totalTime < 10
          if (duration === 'medium') return totalTime >= 10 && totalTime <= 20
          if (duration === 'long') return totalTime > 20
          return false
        })
      })
    }
    
    // Filtrer par type de repas
    if (filters.value.mealTypes.length > 0) {
      result = result.filter(recipe => 
        filters.value.mealTypes.includes(recipe.mealType)
      )
    }
    
    // Filtrer par objectif digestif
    if (filters.value.digestiveGoals.length > 0) {
      result = result.filter(recipe => 
        filters.value.digestiveGoals.includes(recipe.digestiveGoal)
      )
    }
    
    return result
  })
  
  // Gérer le changement de filtres
  const handleFilterChange = (newFilters: Filters) => {
    filters.value = newFilters
    page.value = 1 // Réinitialiser la pagination lors du changement de filtres
  }
  
  // Réinitialiser les filtres
  const resetFilters = () => {
    filters.value = {
      durations: [],
      mealTypes: [],
      digestiveGoals: []
    }
  }
  
  // Charger plus de recettes
  const loadMore = async () => {
    if (isLoadingMore.value) return
    
    isLoadingMore.value = true
    page.value++
    
    try {
      await recipesStore.fetchMoreRecipes(page.value)
    } catch (error) {
      console.error('Erreur lors du chargement de plus de recettes:', error)
      toastStore.error('Impossible de charger plus de recettes.')
    } finally {
      isLoadingMore.value = false
    }
  }
  
  // Gérer l'ajout au calendrier
  const handleAddToCalendar = (recipe: Recipe) => {
    selectedRecipe.value = recipe
    showCalendarModal.value = true
  }
  
  // Confirmer l'ajout au calendrier
  const confirmAddToCalendar = async () => {
    if (!selectedRecipe.value || !selectedDate.value) return
    
    try {
      // Ici on simule l'appel à l'API pour ajouter au calendrier
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Afficher une notification de succès
      toastStore.success(
        `${selectedRecipe.value.title} ${$t('recipes.add_to_calendar.success')}`, 
        { position: 'bottom-center' }
      )
      
      // Fermer la modal
      showCalendarModal.value = false
      selectedRecipe.value = null
    } catch (error) {
      console.error('Erreur lors de l\'ajout au calendrier:', error)
      toastStore.error('Impossible d\'ajouter au calendrier.')
    }
  }
  </script>