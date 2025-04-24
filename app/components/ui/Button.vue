<!-- app/components/ui/Button.vue -->
<template>
  <button
    :class="[
      'font-title font-medium rounded-xl transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
      sizeClasses,
      variantClasses,
      disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-soft',
      fullWidth ? 'w-full' : '',
      className
    ]"
    :disabled="disabled"
    :type="type"
    @click="$emit('click', $event)"
  >
    <div class="flex items-center justify-center">
      <slot name="icon-left"></slot>
      <span :class="{ 'ml-2': $slots['icon-left'], 'mr-2': $slots['icon-right'] }">
        <slot></slot>
      </span>
      <slot name="icon-right"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'ghost', 'danger', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  type: {
    type: String as () => 'button' | 'reset' | 'submit',
    default: 'button'
  },
  className: {
    type: String,
    default: ''
  }
})

defineEmits(['click'])

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-sm py-2 px-3'
    case 'lg': return 'text-lg py-3 px-6'
    default: return 'text-base py-2.5 px-4'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary text-white shadow-soft'
    case 'secondary':
      return 'bg-success text-primary border border-success'
    case 'ghost':
      return 'bg-transparent border border-primary text-primary hover:bg-primary hover:bg-opacity-10'
    case 'danger':
      return 'bg-warning-soft text-dark border border-warning-soft'
    case 'icon':
      return 'rounded-full bg-primary text-white p-2'
    default:
      return 'bg-primary text-white'
  }
})
</script>