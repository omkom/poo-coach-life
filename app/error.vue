<!-- app/error.vue -->
<template>
    <div class="min-h-screen flex flex-col bg-background">
      <!-- Header simplifié -->
      <header class="bg-background shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="font-title font-bold text-xl text-primary">
                <span class="text-2xl mr-2">💩</span> Coach
              </NuxtLink>
            </div>
          </div>
        </div>
      </header>
      
      <!-- Contenu d'erreur adapté -->
      <main class="flex-grow flex items-center justify-center py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div v-if="error.statusCode === 404" class="space-y-8">
            <!-- Erreur 404 -->
            <div class="flex justify-center mb-6">
              <div class="relative">
                <div class="text-9xl">🧻</div>
                <div class="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  404
                </div>
              </div>
            </div>
            
            <h1 class="font-title font-bold text-3xl md:text-4xl text-primary">
              {{ $t('errors.404.title') }}
            </h1>
            
            <p class="text-gray-600 text-lg">
              {{ $t('errors.404.text') }}
            </p>
            
            <div class="space-y-4">
              <Button 
                variant="primary" 
                size="lg"
                @click="goToHome"
              >
                {{ $t('errors.404.back_home') }}
              </Button>
              
              <div class="mt-8">
                <h3 class="font-title font-bold text-lg text-primary mb-4">
                  {{ $t('errors.404.suggestions') }}
                </h3>
                <div class="flex flex-wrap justify-center gap-4">
                  <NuxtLink to="/recettes" class="flex items-center text-primary hover:text-opacity-80">
                    <span class="mr-1">🥣</span> Recettes
                  </NuxtLink>
                  <NuxtLink to="/conseils" class="flex items-center text-primary hover:text-opacity-80">
                    <span class="mr-1">📘</span> Conseils
                  </NuxtLink>
                  <NuxtLink to="/routines" class="flex items-center text-primary hover:text-opacity-80">
                    <span class="mr-1">🧘‍♀️</span> Routines
                  </NuxtLink>
                  <button @click="openChat" class="flex items-center text-primary hover:text-opacity-80">
                    <span class="mr-1">💬</span> 💩 Coach
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else class="space-y-8">
            <!-- Erreur 500 et autres -->
            <div class="flex justify-center mb-6">
              <div class="relative">
                <div class="text-9xl">🚽</div>
                <div class="text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {{ error.statusCode || 500 }}
                </div>
              </div>
            </div>
            
            <h1 class="font-title font-bold text-3xl md:text-4xl text-primary">
              {{ $t('errors.500.title') }}
            </h1>
            
            <p class="text-gray-600 text-lg">
              {{ $t('errors.500.text') }}
            </p>
            
            <div class="space-x-4">
              <Button 
                variant="primary" 
                @click="handleError"
              >
                {{ $t('errors.500.retry') }}
              </Button>
              
              <Button 
                variant="ghost" 
                to="/contact"
              >
                {{ $t('errors.500.contact') }}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { navigateTo, clearError } from 'nuxt/app'
import { useI18n } from 'vue-i18n'
  
  // Props
  const props = defineProps({
    error: {
      type: Object,
      required: true
    }
  })
  
  const { t } = useI18n()
  
  // Fonctions
  const goToHome = () => {
    navigateTo('/')
  }
  
  const handleError = () => {
    clearError({ redirect: '/' })
  }
  
  // Ouvrir le chat
  const openChat = () => {
    if (typeof window !== 'undefined') {
      const event = new Event('open-chat')
      window.dispatchEvent(event)
    }
  }
  </script>