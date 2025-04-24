<!-- app/components/ui/NavLink.vue -->
<template>
  <NuxtLink 
    :to="to" 
    :class="[
      'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200',
      isActive ? 'border-primary text-primary' : 'border-transparent text-gray-600 hover:text-primary'
    ]"
  >
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isActive = computed(() => {
  return route.path === props.to || route.path.startsWith(`${props.to}/`)
})
</script>