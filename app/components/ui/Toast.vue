<!-- app/components/ui/Toast.vue -->
<template>
    <Transition name="toast">
      <div 
        v-if="visible"
        :class="[
          'fixed z-50 flex items-center px-4 py-3 rounded-xl shadow-lg',
          positionClasses,
          variantClasses
        ]"
        role="alert"
      >
        <!-- Icône -->
        <div class="mr-3">
          <slot name="icon">
            <svg v-if="variant === 'success'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg v-else-if="variant === 'error'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg v-else-if="variant === 'warning'" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </slot>
        </div>
        
        <!-- Contenu -->
        <div>
            <div v-if="title" class="font-bold">{{ title }}</div>
            <div class="text-sm">
            <slot>{{ message }}</slot>
            </div>
        </div>
        
        <!-- Bouton fermer -->
        <button 
            v-if="dismissible"
            @click="dismiss"
            class="ml-auto pl-3 text-current focus:outline-none"
            aria-label="Fermer"
        >
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
    </Transition>
    </template>

    <script setup lang="ts">
    import { ref, computed, onMounted, watch } from 'vue'

    const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: 'info',
        validator: (value: string) => ['success', 'error', 'warning', 'info'].includes(value)
    },
    position: {
        type: String,
        default: 'bottom-center',
        validator: (value: string) => [
        'top-left', 'top-center', 'top-right',
        'bottom-left', 'bottom-center', 'bottom-right'
        ].includes(value)
    },
    duration: {
        type: Number,
        default: 3000 // ms
    },
    dismissible: {
        type: Boolean,
        default: true
    },
    show: {
        type: Boolean,
        default: true
    }
    })

    const emit = defineEmits(['close'])

    // État local
    const visible = ref(props.show)
    let timer: ReturnType<typeof setTimeout> | null = null

    // Classes pour la position
    const positionClasses = computed(() => {
    switch (props.position) {
        case 'top-left': return 'top-4 left-4';
        case 'top-center': return 'top-4 left-1/2 transform -translate-x-1/2';
        case 'top-right': return 'top-4 right-4';
        case 'bottom-left': return 'bottom-4 left-4';
        case 'bottom-center': return 'bottom-4 left-1/2 transform -translate-x-1/2';
        case 'bottom-right': return 'bottom-4 right-4';
        default: return 'bottom-4 right-4';
    }
    })

    // Classes pour la variante
    const variantClasses = computed(() => {
    switch (props.variant) {
        case 'success': return 'bg-success text-primary';
        case 'error': return 'bg-warning-soft text-dark';
        case 'warning': return 'bg-warning text-dark';
        case 'info': return 'bg-info text-gray-700';
        default: return 'bg-white text-gray-700';
    }
    })

    // Fermer manuellement
    const dismiss = () => {
    visible.value = false
    if (timer) {
        clearTimeout(timer)
        timer = null
    }
    emit('close')
    }

    // Gérer l'autofermeture
    const setupAutoClose = () => {
    if (props.duration > 0) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
        visible.value = false
        emit('close')
        }, props.duration)
    }
    }

    // Observer les changements de props.show
    watch(() => props.show, (newVal) => {
    visible.value = newVal
    if (newVal) {
        setupAutoClose()
    }
    })

    // Initialiser le timer d'autofermeture
    onMounted(() => {
    if (props.show) {
        setupAutoClose()
    }
    })
    </script>

    <style scoped>
    .toast-enter-active,
    .toast-leave-active {
    transition: opacity 0.3s, transform 0.3s;
    }
    .toast-enter-from,
    .toast-leave-to {
    opacity: 0;
    transform: translateY(10px);
    }
    </style>