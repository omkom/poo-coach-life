<!-- app/components/recipes/RecipeGrid.vue -->
<template>
    <div>
      <!-- Nombre de résultats -->
      <div class="mb-4 text-sm text-gray-600">
        {{ recipes.length }} résultat{{ recipes.length > 1 ? 's' : '' }}
      </div>
      
      <div v-if="recipes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="recipe in recipes" :key="recipe.id" class="h-full">
          <NuxtLink :to="`/recettes/${recipe.slug}`" class="h-full block">
            <RecipeCard 
              :recipe="recipe" 
              @add-to-calendar="addToCalendar"
            />
          </NuxtLink>
        </div>
      </div>
      
      <!-- État vide -->
      <div 
        v-else 
        class="bg-white rounded-xl p-8 text-center border border-neutral border-opacity-20"
      >
        <div class="text-5xl mb-4">🔍</div>
        <h3 class="font-title font-bold text-xl mb-3 text-primary">
          Aucune recette trouvée
        </h3>
        <p class="text-gray-600 mb-6">
          {{ $t('recipes.no_results') }}
        </p>
        <Button variant="primary" @click="$emit('reset-filters')">
          Réinitialiser les filtres
        </Button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
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
  }
  
  const props = defineProps<{
    recipes: Recipe[];
  }>()
  
  const emit = defineEmits(['reset-filters', 'add-to-calendar'])
  
  // Méthode relai pour l'ajout au calendrier
  const addToCalendar = (recipe: Recipe) => {
    emit('add-to-calendar', recipe)
  }
  </script>