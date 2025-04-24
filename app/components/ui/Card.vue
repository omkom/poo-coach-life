<!-- app/components/ui/Card.vue -->
<template>
    <div 
      :class="[
        'rounded-xl overflow-hidden transition-all duration-200',
        hover ? 'hover:shadow-md hover:-translate-y-1' : '',
        className
      ]"
    >
      <div v-if="$slots.image" class="w-full overflow-hidden">
        <slot name="image"></slot>
      </div>
      
      <div :class="[padding ? 'p-4' : '']">
        <div v-if="$slots.title" class="font-title text-lg font-bold mb-2">
          <slot name="title"></slot>
        </div>
        
        <div v-if="$slots.content">
          <slot name="content"></slot>
        </div>
        
        <div v-if="$slots.footer" :class="[padding ? 'mt-4' : '']">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    hover: {
      type: Boolean,
      default: true
    },
    padding: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    }
  })
  </script>