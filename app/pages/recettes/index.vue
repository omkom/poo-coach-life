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
        >
          Voir plus de recettes
        </Button>
      </div>
      
      <!-- Modal d'ajout au calendrier (simple pour l'instant) -->
      <div 
        v-if="showCalendarModal" 
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 class="font-title font-bold text-xl mb-4">
            Ajouter au calendrier
          </h3>
          <p class="mb-4">
            Quand souhaites-tu préparer "{{ selectedRecipe?.title }}" ?
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
              Annuler
            </Button>
            <Button variant="primary" @click="confirmAddToCalendar">
              Ajouter
            </Button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  
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
  
  // État
  const recipes = ref<Recipe[]>([])
  const filters = ref<Filters>({
    durations: [],
    mealTypes: [],
    digestiveGoals: []
  })
  const page = ref(1)
  const perPage = ref(9)
  const hasMoreRecipes = ref(true)
  const isLoading = ref(false)
  
  // État pour le calendrier
  const showCalendarModal = ref(false)
  const selectedRecipe = ref<Recipe | null>(null)
  const selectedDate = ref('')
  
  // Charger les recettes à l'initialisation
  onMounted(async () => {
    await loadRecipes()
    
    // Définir la date d'aujourd'hui comme valeur par défaut
    const today = new Date()
    selectedDate.value = today.toISOString().split('T')[0]
  })
  
  // Charger les recettes (simulation API)
  const loadRecipes = async () => {
    isLoading.value = true
    
    try {
      // Simulation d'appel API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Mock de données pour le développement
      const mockRecipes: Recipe[] = [
        {
          id: '1',
          slug: 'smoothie-banane-lin',
          title: 'Smoothie banane et graines de lin',
          description: 'Un délicieux smoothie riche en fibres solubles pour un réveil en douceur.',
          imageUrl: 'https://images.unsplash.com/photo-1528714652565-e9142cf75110?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 5,
          difficulty: 'easy',
          digestiveScore: 4,
          tags: ['batchable', 'transit_plus', 'gentle'],
          mealType: 'breakfast',
          digestiveGoal: 'transitBoost'
        },
        {
          id: '2',
          slug: 'saumon-patate-douce',
          title: 'Saumon et purée de patate douce',
          description: 'Un plat complet et sain, riche en oméga 3 et en fibres douces.',
          imageUrl: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 15,
          cookTime: 20,
          difficulty: 'medium',
          digestiveScore: 5,
          tags: ['comfort', 'balanced', 'gentle'],
          mealType: 'dinner',
          digestiveGoal: 'digestiveRest'
        },
        {
          id: '3',
          slug: 'porridge-flocons-avoine',
          title: 'Porridge aux flocons d\'avoine',
          description: 'Démarrez la journée avec ce porridge onctueux riche en fibres solubles.',
          imageUrl: 'https://images.unsplash.com/photo-1517093157656-b9eccef01cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 10,
          cookTime: 5,
          difficulty: 'easy',
          digestiveScore: 5,
          tags: ['comfort', 'transit_plus', 'storable'],
          mealType: 'breakfast',
          digestiveGoal: 'transitBoost'
        },
        {
          id: '4',
          slug: 'soupe-carotte-gingembre',
          title: 'Soupe carotte et gingembre',
          description: 'Une soupe légère et réchauffante pour apaiser votre ventre.',
          imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 15,
          cookTime: 25,
          difficulty: 'easy',
          digestiveScore: 4,
          tags: ['comfort', 'antiBloom', 'batchable'],
          mealType: 'dinner',
          digestiveGoal: 'antiBloom'
        },
        {
          id: '5',
          slug: 'yaourt-vegetal-fruits-rouges',
          title: 'Yaourt végétal aux fruits rouges',
          description: 'Un encas léger et fruité, pauvre en lactose.',
          imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0bfdf32?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 5,
          difficulty: 'easy',
          digestiveScore: 3,
          tags: ['fast', 'gentle', 'tea'],
          mealType: 'snack',
          digestiveGoal: 'digestiveRest'
        },
        {
          id: '6',
          slug: 'bowl-riz-complet-legumes',
          title: 'Bowl de riz complet et légumes',
          description: 'Un repas équilibré, rassasiant mais digeste.',
          imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          prepTime: 20,
          cookTime: 30,
          difficulty: 'medium',
          digestiveScore: 4,
          tags: ['balanced', 'storable', 'batchable'],
          mealType: 'lunch',
          digestiveGoal: 'energyRecharge'
        }
      ]
      
      recipes.value = mockRecipes
      
      // Déterminer s'il y a plus de pages
      hasMoreRecipes.value = false // Pour le mock, on limite à une page
    } catch (error) {
      console.error('Erreur lors du chargement des recettes:', error)
    } finally {
      isLoading.value = false
    }
  }
  
  // Filtrer les recettes selon les critères
  const filteredRecipes = computed(() => {
    let result = [...recipes.value]
    
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
    page.value++
    await loadRecipes()
  }
  
  // Gérer l'ajout au calendrier
  const handleAddToCalendar = (recipe: Recipe) => {
    selectedRecipe.value = recipe
    showCalendarModal.value = true
  }
  
  // Confirmer l'ajout au calendrier
  const confirmAddToCalendar = () => {
    if (selectedRecipe.value && selectedDate.value) {
      // Ici viendra la logique d'intégration avec Google Calendar ou autre
      console.log(`Recette "${selectedRecipe.value.title}" ajoutée au calendrier pour le ${selectedDate.value}`)
      
      // Fermer la modal
      showCalendarModal.value = false
      selectedRecipe.value = null
      
      // Feedback à l'utilisateur
      // À implémenter: Toast ou notification
    }
  }
  </script>