<!-- app/layouts/default.vue -->
<template>
    <div class="flex flex-col min-h-screen bg-background">
      <!-- Navbar -->
      <Navbar @open-chat="openChat" />
      
      <!-- Contenu principal -->
      <main class="flex-grow">
        <slot />
      </main>
      
      <!-- Footer -->
      <Footer />
      
      <!-- Chat flottant -->
      <ChatLauncher ref="chatLauncherRef" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // Référence au composant ChatLauncher
  const chatLauncherRef = ref(null)
  
  // Méthode pour ouvrir le chat depuis la navbar
  const openChat = () => {
    if (chatLauncherRef.value) {
      chatLauncherRef.value.openChat()
    }
  }
  </script>