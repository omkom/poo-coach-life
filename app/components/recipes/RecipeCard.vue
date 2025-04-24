<!-- app/components/recipes/RecipeCard.vue -->
<template>
    <Card 
      hover 
      class="h-full bg-white border border-neutral border-opacity-20"
    >
      <template #image>
        <div class="relative h-48 overflow-hidden">
          <img 
            :src="recipe.imageUrl || '/images/placeholder-recipe.jpg'" 
            :alt="recipe.title"
            class="w-full h-full object-cover"
          />
          <!-- Tags flottants -->
          <div class="absolute top-2 right-2 flex flex-col gap-1">
            <div 
              v-if="recipe.prepTime <= 10"
              class="bg-primary bg-opacity-90 text-white px-2 py-1 rounded-lg text-xs font-medium" 
            >
              🚀 {{ $t('recipes.tags.fast') }}
            </div>
            <div 
              v-if="recipe.tags.includes('batchable')"
              class="bg-success bg-opacity-90 text-primary px-2 py-1 rounded-lg text-xs font-medium"
            >
              🧺 {{ $t('recipes.tags.batchable') }}
            </div>
          </div>
          <!-- Score digestif -->
          <div class="absolute bottom-2 left-2 bg-dark bg-opacity-80 text-white px-2 py-1 rounded-full text-xs font-bold">
            💩 {{ recipe.digestiveScore || 3 }}/5
          </div>
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold text-primary line-clamp-1">
            {{ recipe.title }}
          </h3>
        </div>
      </template>
      
      <template #content>
        <p class="text-sm text-gray-600 line-clamp-2 h-10 mb-1">
          {{ recipe.description }}
        </p>
        
        <div class="flex justify-between items-center text-xs text-gray-500 mt-2">
          <div class="flex items-center">
            <span class="mr-1">⏱️</span>
            {{ recipe.prepTime + (recipe.cookTime || 0) }} min
          </div>
          <div class="flex items-center">
            <span 
              :class="{
                'text-red-500': recipe.difficulty === 'hard',
                'text-yellow-500': recipe.difficulty === 'medium',
                'text-green-500': recipe.difficulty === 'easy'
              }"
            >●</span>
            <span class="ml-1">
              {{ getDifficultyLabel(recipe.difficulty) }}
            </span>
          </div>
        </div>
        
        <!-- Tags supplémentaires -->
        <div class="flex flex-wrap gap-1 mt-3">
          <span 
            v-for="tag in displayTags" 
            :key="tag"
            class="text-xs bg-background px-2 py-1 rounded-full text-gray-600"
          >
            {{ getTagLabel(tag) }}
          </span>
        </div>
      </template>
      
      <template #footer>
        <div class="flex justify-between mt-4">
          <Button 
            variant="secondary" 
            size="sm"
            class="flex-1 mr-2" 
            @click="addToCalendar"
          >
            <template #icon-left>
              <span class="text-xs">📅</span>
            </template>
            {{ $t('global.actions.add_to_calendar') }}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm"
            class="flex-none"
            @click="toggleFavorite" 
          >
            <span v-if="isFavorite">❤️</span>
            <span v-else>🤍</span>
          </Button>
        </div>
      </template>
    </Card>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { t } = useI18n()
  
  // Définition du type de recette
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
    recipe: Recipe;
  }>()
  
  // État local pour les favoris
  const isFavorite = ref(false)
  
  // Limiter le nombre de tags affichés
  const displayTags = computed(() => {
    return props.recipe.tags.slice(0, 3)
  })
  
  // Fonctions utilitaires
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return t('recipes.level.beginner');
      case 'medium': return t('recipes.level.intermediate');
      case 'hard': return t('recipes.level.advanced');
      default: return difficulty;
    }
  }
  
  const getTagLabel = (tag: string) => {
    const translationKey = `recipes.tags.${tag}`
    // Si la traduction existe, l'utiliser, sinon utiliser le tag brut
    return t(translationKey) !== translationKey ? t(translationKey) : tag
  }
  
  // Actions
  const toggleFavorite = () => {
    isFavorite.value = !isFavorite.value
    // Ici viendra la logique pour sauvegarder dans localStorage ou DB
  }
  
  const addToCalendar = () => {
    // Ici viendra la logique pour ajouter au calendrier
    console.log(`Adding recipe "${props.recipe.title}" to calendar`)
    
    // Émission d'événement pour gérer l'ajout au calendrier depuis le parent
    emit('add-to-calendar', props.recipe)
  }
  
  const emit = defineEmits(['add-to-calendar'])
  </script>