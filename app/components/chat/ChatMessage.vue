<!-- app/components/chat/ChatMessage.vue (complet) -->
<template>
    <div 
      class="mb-4 last:mb-0"
      :class="[message.isUser ? 'ml-auto' : '']"
    >
      <!-- Message de l'utilisatrice -->
      <div 
        v-if="message.isUser" 
        class="bg-primary text-white rounded-t-xl rounded-bl-xl py-2 px-3 max-w-xs ml-auto"
      >
        {{ message.content }}
      </div>
      
      <!-- Message de 💩 Coach -->
      <div v-else class="flex items-start">
        <div class="flex-shrink-0 w-8 h-8 bg-chat-bg rounded-full flex items-center justify-center mr-2">
          <span class="text-lg">💩</span>
        </div>
        <div class="bg-chat-bg text-gray-800 rounded-t-xl rounded-br-xl py-2 px-3 max-w-sm">
          <div v-if="message.isTyping" class="flex items-center space-x-1">
            <div class="dot"></div>
            <div class="dot delay-100"></div>
            <div class="dot delay-200"></div>
          </div>
          <div v-else>
            <!-- Si le contenu est du markdown, le rendre -->
            <div v-if="message.isMarkdown" v-html="renderedMarkdown"></div>
            <!-- Sinon, afficher le texte simple -->
            <div v-else>{{ message.content }}</div>
            
            <!-- Actions supplémentaires si nécessaire -->
            <div v-if="message.actions && message.actions.length > 0" class="mt-3 flex flex-wrap gap-2">
              <button 
                v-for="action in message.actions" 
                :key="action.text"
                class="bg-transparent border border-primary text-primary hover:bg-primary hover:bg-opacity-10 text-sm font-medium py-1 px-2 rounded-xl transition duration-200"
                @click="handleAction(action)"
              >
                {{ action.text }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { marked } from 'marked'
  
  interface ChatAction {
    text: string;
    value: string;
  }
  
  interface ChatMessage {
    id: string;
    content: string;
    isUser: boolean;
    isTyping?: boolean;
    isMarkdown?: boolean;
    timestamp: Date;
    actions?: ChatAction[];
  }
  
  const props = defineProps<{
    message: ChatMessage;
  }>()
  
  const emit = defineEmits(['action'])
  
  // Rendu du markdown si nécessaire
  const renderedMarkdown = computed(() => {
    if (!props.message.isMarkdown) return '';
    return marked(props.message.content)
  })
  
  // Gérer les actions du message
  const handleAction = (action: ChatAction) => {
    emit('action', action)
  }
  </script>
  
  <style scoped>
  .dot {
    @apply bg-gray-700 rounded-full h-1.5 w-1.5 animate-pulse;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  </style>