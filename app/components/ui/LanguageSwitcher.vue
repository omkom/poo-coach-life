<!-- app/components/ui/LanguageSwitcher.vue -->
<template>
    <div class="relative">
      <button 
        @click="isOpen = !isOpen" 
        class="flex items-center text-xs text-gray-600 focus:outline-none"
      >
        <span class="mr-1">{{ currentLocaleFlag }}</span>
        <span class="hidden sm:inline-block">{{ currentLocaleName }}</span>
        <svg 
          class="h-4 w-4 ml-1" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <!-- Language dropdown -->
      <div 
        v-if="isOpen" 
        class="absolute right-0 mt-2 py-2 w-32 bg-white rounded-xl shadow-lg z-10"
        @click="isOpen = false"
      >
        <a 
          v-for="locale in locales" 
          :key="locale.code" 
          href="#" 
          @click.prevent="switchLanguage(locale.code)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <span class="mr-2">{{ locale.flag }}</span>
          {{ locale.name }}
        </a>
      </div>
    </div>
    
    <!-- Click outside handler -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-0"
      @click="isOpen = false"
    ></div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const isOpen = ref(false)
  
  // Define available languages
  const locales = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ]
  
  const { locale } = useI18n()
  
  // Switch language function
  const switchLanguage = (code: string) => {
    locale.value = code
    isOpen.value = false
  }
  
  // Get current locale information
  const currentLocale = computed(() => {
    return locales.find(l => l.code === locale.value) || locales[0]
  })
  
  const currentLocaleName = computed(() => currentLocale.value.name)
  const currentLocaleFlag = computed(() => currentLocale.value.flag)
  </script>