<!-- app/components/recipes/RecipeFilters.vue -->
<template>
    <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="font-title font-bold text-lg text-primary">
          {{ $t('recipes.filters.title') }}
        </h2>
        
        <!-- Bouton collapse mobile -->
        <button 
          @click="isCollapsed = !isCollapsed"
          class="md:hidden text-gray-500 hover:text-primary focus:outline-none"
        >
          <span v-if="isCollapsed">+</span>
          <span v-else>-</span>
        </button>
      </div>
      
      <div :class="[isCollapsed ? 'hidden' : 'block', 'md:block']">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Durée -->
          <div>
            <h3 class="font-medium text-sm mb-2">{{ $t('recipes.filters.duration') }}</h3>
            <div class="space-y-2">
              <label 
                v-for="(duration, key) in durations" 
                :key="key"
                class="flex items-center cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  :value="key" 
                  v-model="selectedDurations"
                  class="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span class="text-sm">{{ duration }}</span>
              </label>
            </div>
          </div>
          
          <!-- Type de repas -->
          <div>
            <h3 class="font-medium text-sm mb-2">{{ $t('recipes.filters.meal_type') }}</h3>
            <div class="space-y-2">
              <label 
                v-for="(mealType, key) in mealTypes" 
                :key="key"
                class="flex items-center cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  :value="key" 
                  v-model="selectedMealTypes"
                  class="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span class="text-sm">{{ mealType }}</span>
              </label>
            </div>
          </div>
          
          <!-- Objectif digestion -->
          <div>
            <h3 class="font-medium text-sm mb-2">{{ $t('recipes.filters.digestive_goal') }}</h3>
            <div class="space-y-2">
              <label 
                v-for="(goal, key) in digestiveGoals" 
                :key="key"
                class="flex items-center cursor-pointer"
              >
                <input 
                  type="checkbox" 
                  :value="key" 
                  v-model="selectedDigestiveGoals"
                  class="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span class="text-sm">{{ goal }}</span>
              </label>
            </div>
          </div>
        </div>
        
        <!-- Boutons actions -->
        <div class="flex justify-end mt-4 space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            @click="resetFilters"
          >
            {{ $t('global.actions.reset') }}
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            @click="applyFilters"
          >
            {{ $t('global.actions.filters') }}
          </Button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import Button from '../ui/Button.vue'
  
  const { t } = useI18n()
  
  // État de collapse pour mobile
  const isCollapsed = ref(true)
  
  // Options de filtres
  const durations = {
    short: t('recipes.duration.short'),
    medium: t('recipes.duration.medium'),
    long: t('recipes.duration.long')
  }
  
  const mealTypes = {
    breakfast: t('recipes.meal_type.breakfast'),
    lunch: t('recipes.meal_type.lunch'),
    dinner: t('recipes.meal_type.dinner'),
    snack: t('recipes.meal_type.snack')
  }
  
  const digestiveGoals = {
    anti_bloating: t('recipes.digestive_goal.anti_bloating'),
    transit_boost: t('recipes.digestive_goal.transit_boost'),
    digestive_rest: t('recipes.digestive_goal.digestive_rest'),
    energy_recharge: t('recipes.digestive_goal.energy_recharge')
  }
  
  // État des filtres sélectionnés
  const selectedDurations = ref<string[]>([])
  const selectedMealTypes = ref<string[]>([])
  const selectedDigestiveGoals = ref<string[]>([])
  
  // Émettre les événements pour les filtres
  const emit = defineEmits(['filter-change'])
  
  // Appliquer les filtres
  const applyFilters = () => {
    const filters = {
      durations: selectedDurations.value,
      mealTypes: selectedMealTypes.value,
      digestiveGoals: selectedDigestiveGoals.value
    }
    
    emit('filter-change', filters)
    
    // Fermer les filtres sur mobile après application
    if (window.innerWidth < 768) {
      isCollapsed.value = true
    }
  }
  
  // Réinitialiser les filtres
  const resetFilters = () => {
    selectedDurations.value = []
    selectedMealTypes.value = []
    selectedDigestiveGoals.value = []
    
    // Appliquer les filtres réinitialisés
    applyFilters()
  }
  
  // Appliquer les filtres automatiquement quand ils changent
  watch([selectedDurations, selectedMealTypes, selectedDigestiveGoals], () => {
    applyFilters()
  }, { deep: true })
  </script>