<!-- app/components/ui/ToastContainer.vue -->
<template>
    <div class="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div v-for="position in positions" :key="position" :class="positionClass(position)">
        <Toast
          v-for="toast in toastsForPosition(position)"
          :key="toast.id"
          :title="toast.title"
          :message="toast.message"
          :variant="toast.variant"
          :position="position"
          :duration="toast.duration || 0"
          :dismissible="toast.dismissible"
          class="pointer-events-auto my-2"
          @close="removeToast(toast.id)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useToastStore, Toast } from '../../store/toast'
  
  // Positions possibles pour les toasts
  const positions = [
    'top-left', 'top-center', 'top-right',
    'bottom-left', 'bottom-center', 'bottom-right'
  ]
  
  // Récupérer les toasts du store
  const toastStore = useToastStore()
  
  // Définir les classes de position
  const positionClass = (position: string) => {
    switch (position) {
      case 'top-left': return 'absolute top-0 left-0 p-4';
      case 'top-center': return 'absolute top-0 left-1/2 transform -translate-x-1/2 p-4';
      case 'top-right': return 'absolute top-0 right-0 p-4';
      case 'bottom-left': return 'absolute bottom-0 left-0 p-4';
      case 'bottom-center': return 'absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4';
      case 'bottom-right': return 'absolute bottom-0 right-0 p-4';
      default: return '';
    }
  }
  
  // Filtrer les toasts par position
  const toastsForPosition = (position: string) => {
    // Par défaut, tous les toasts vont à 'bottom-right' s'ils n'ont pas de position spécifiée
    return toastStore.toasts.filter(toast => 
      (toast as any).position === position || 
      (position === 'bottom-right' && !(toast as any).position)
    )
  }
  
  // Supprimer un toast
  const removeToast = (id: string) => {
    toastStore.remove(id)
  }
  </script>