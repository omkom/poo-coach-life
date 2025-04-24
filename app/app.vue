<!-- app/app.vue (mise à jour) -->
<template>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Container de toasts global -->
    <ToastContainer />
  </template>
  
  <style>
  /* Styles globaux pour l'application */
  html {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5DC;
  }
  
  body {
    @apply text-gray-800;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-title;
  }
  
  h1 {
    @apply text-3xl font-bold mb-6;
  }
  
  h2 {
    @apply text-2xl font-bold mb-4;
  }
  
  h3 {
    @apply text-xl font-bold mb-3;
  }
  
  a {
    @apply transition-colors duration-200;
  }
  
  /* Focus styles for accessibility */
  *:focus-visible {
    @apply outline outline-2 outline-primary outline-offset-2;
  }
  
  /* Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>