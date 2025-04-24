<!-- app/components/chat/ChatMessages.vue -->
<template>
    <div class="flex flex-col space-y-4 p-4" ref="messagesContainer">
      <!-- Message de bienvenue -->
      <ChatMessage 
        v-if="messages.length === 0" 
        :message="{
          id: 'welcome',
          content: $t('chat.welcome'),
          isUser: false,
          timestamp: new Date(),
          actions: welcomeActions
        }"
        @action="handleMessageAction"
      />
      
      <!-- Messages de la conversation -->
      <ChatMessage 
        v-for="message in messages" 
        :key="message.id" 
        :message="message"
        @action="handleMessageAction"
      />
      
      <!-- Indicateur de chargement quand l'IA répond -->
      <ChatMessage 
        v-if="isLoading" 
        :message="{
          id: 'typing',
          content: '',
          isUser: false,
          isTyping: true,
          timestamp: new Date()
        }"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, onMounted, nextTick } from 'vue'
  import { useI18n } from 'vue-i18n'
  import ChatMessage from './ChatMessage.vue'
  
  const { t } = useI18n()
  
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
    messages: ChatMessage[];
    isLoading: boolean;
  }>()
  
  const emit = defineEmits(['action'])
  
  // Référence au conteneur pour auto-scroll
  const messagesContainer = ref<HTMLElement | null>(null)
  
  // Actions de bienvenue suggérées
  const welcomeActions = [
    { text: 'Comment manger sans se sentir ballonnée ?', value: 'Je veux des conseils pour éviter les ballonnements quand je mange' },
    { text: 'Conseille-moi une recette légère pour le soir', value: 'Quelle recette légère me suggères-tu pour le dîner ?' },
    { text: 'J\'ai souvent un ventre gonflé, que faire ?', value: 'Mon ventre est souvent gonflé et inconfortable, as-tu des conseils ?' }
  ]
  
  // Gérer les actions des messages
  const handleMessageAction = (action: ChatAction) => {
    emit('action', action)
  }
  
  // Auto-scroll vers le bas des messages
  const scrollToBottom = async () => {
    await nextTick()
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }
  
  // Observer les changements dans les messages pour auto-scroll
  watch(() => props.messages.length, scrollToBottom)
  watch(() => props.isLoading, scrollToBottom)
  
  // Scroll initial
  onMounted(scrollToBottom)
  </script>
  
  <style scoped>
  /* Style pour le scrollbar */
  div::-webkit-scrollbar {
    width: 6px;
  }
  
  div::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  div::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }
  
  div::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
  </style>