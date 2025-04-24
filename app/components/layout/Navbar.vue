<!-- app/components/layout/Navbar.vue -->
<template>
    <nav class="bg-background shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink to="/" class="font-title font-bold text-xl text-primary flex items-center">
                <span class="text-2xl mr-2">💩</span> Coach
              </NuxtLink>
            </div>
            
            <!-- Navigation principale - visible sur desktop -->
            <div class="hidden sm:ml-8 sm:flex sm:space-x-6">
              <NavLink v-for="item in navItems" :key="item.to" :to="item.to" :label="item.label" />
            </div>
          </div>
          
          <div class="flex items-center">
            <!-- Bouton ChatLauncher - version desktop -->
            <div class="hidden sm:flex">
              <Button 
                variant="primary" 
                size="sm" 
                @click="toggleChat"
                class="mr-4"
              >
                <span class="mr-2">💬</span>
                Parler à 💩 Coach
              </Button>
            </div>
            
            <!-- Sélecteur de langue -->
            <LanguageSwitcher class="mr-2" />
            
            <!-- Bouton de menu mobile -->
            <button 
              @click="toggleMobileMenu"
              class="sm:hidden p-2 rounded-md text-primary focus:outline-none"
            >
              <span class="sr-only">Ouvrir le menu</span>
              <!-- Icône menu/fermer -->
              <svg 
                v-if="!mobileMenuOpen" 
                class="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                v-else 
                class="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Menu mobile -->
      <div v-if="mobileMenuOpen" class="sm:hidden bg-background">
        <div class="pt-2 pb-4 space-y-1">
          <NuxtLink 
            v-for="item in navItems" 
            :key="item.to" 
            :to="item.to"
            class="block pl-3 pr-4 py-2 text-base font-medium text-primary hover:bg-success hover:bg-opacity-20"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
        <!-- Bouton ChatLauncher - version mobile -->
        <div class="px-4 pb-4">
          <Button 
            variant="primary" 
            fullWidth 
            @click="toggleChat"
          >
            <span class="mr-2">💬</span>
            Parler à 💩 Coach
          </Button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import Button from '../ui/Button.vue'
  import NavLink from '../ui/NavLink.vue'
  import LanguageSwitcher from '../ui/LanguageSwitcher.vue'
  
  // État du menu mobile
  const mobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  
  // Émission d'événement pour ouvrir le chat
  const emit = defineEmits(['open-chat'])
  
  const toggleChat = () => {
    mobileMenuOpen.value = false
    emit('open-chat')
  }
  
  // Navigation items basé sur les routes définies
  const navItems = [
    { to: '/recettes', label: 'Recettes' },
    { to: '/conseils', label: 'Conseils' },
    { to: '/routines', label: 'Routines' },
    { to: '/boutique', label: 'Boutique' },
    { to: '/a-propos', label: 'À propos' }
  ]
  </script>