<!-- app/components/chat/ChatLauncher.vue -->
<template>
    <div>
      <!-- Bouton flottant (version fermée) -->
      <button 
        v-if="!isOpen" 
        @click="openChat"
        class="fixed bottom-6 right-6 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40"
        aria-label="Ouvrir le chat avec 💩 Coach"
      >
        <span class="text-2xl">💩</span>
      </button>
      
      <!-- Fenêtre de chat (version ouverte) -->
      <div 
        v-if="isOpen" 
        class="fixed bottom-0 right-6 bg-white rounded-t-xl shadow-lg overflow-hidden z-40 w-full max-w-md"
        style="max-height: 80vh;"
      >
        <!-- Header du chat -->
        <div class="bg-chat-bg p-4 flex justify-between items-center">
          <div class="font-title font-bold text-primary flex items-center">
            <span class="text-xl mr-2">💩</span> 
            <span>Coach</span>
          </div>
          <div class="flex items-center">
            <button 
              @click="minimizeChat"
              class="text-gray-500 hover:text-gray-700 focus:outline-none mr-2"
              aria-label="Minimiser le chat"
            >
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button 
              @click="closeChat"
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Fermer le chat"
            >
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Corps du chat - Messages -->
        <div 
          ref="chatMessagesRef"
          class="overflow-y-auto bg-gray-50"
          :style="isMinimized ? 'height: 0' : 'height: 350px;'"
          :class="{ 'transition-all duration-300': true }"
        >
          <ChatMessages 
            :messages="messages" 
            :isLoading="isLoading"
            @action="handleSuggestedAction"
          />
        </div>
        
        <!-- Zone de saisie -->
        <div class="p-4 border-t border-gray-200" v-if="!isMinimized">
          <form @submit.prevent="sendMessage">
            <div class="flex">
              <input 
                v-model="messageInput"
                type="text" 
                placeholder="Pose ta question à 💩 Coach..."
                class="flex-1 px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                :disabled="isLoading"
              />
              <button 
                type="submit"
                class="bg-primary text-white font-medium py-2 px-4 rounded-r-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-soft transition duration-200"
                :disabled="!messageInput.trim() || isLoading"
              >
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import { useToastStore } from '../../store/toast'
  
  // Interface pour les messages de chat
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
  
  // États
  const isOpen = ref(false)
  const isMinimized = ref(false)
  const messageInput = ref('')
  const chatMessagesRef = ref<HTMLElement | null>(null)
  const messages = ref<ChatMessage[]>([])
  const isLoading = ref(false)
  
  // Stores
  const toastStore = useToastStore()
  
  // Persister les messages entre les sessions
  onMounted(() => {
    loadMessages()
  })
  
  // Sauvegarder les messages quand ils changent
  watch(messages, () => {
    saveMessages()
  }, { deep: true })
  
  // Fonctions de sauvegarde et chargement
  const saveMessages = () => {
    if (messages.value.length > 0) {
      localStorage.setItem('chat_messages', JSON.stringify(messages.value))
    }
  }
  
  const loadMessages = () => {
    const savedMessages = localStorage.getItem('chat_messages')
    if (savedMessages) {
      try {
        // Parse les dates
        const parsed = JSON.parse(savedMessages)
        messages.value = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }))
      } catch (error) {
        console.error('Erreur lors du chargement des messages:', error)
        // En cas d'erreur, on repart de zéro
        messages.value = []
      }
    }
  }
  
  // Ouvrir le chat
  const openChat = () => {
    isOpen.value = true
    isMinimized.value = false
    // Focus sur l'input après ouverture
    setTimeout(() => {
      const input = document.querySelector('input[type="text"]') as HTMLInputElement
      if (input) {
        input.focus()
      }
    }, 100)
  }
  
  // Fermer le chat
  const closeChat = () => {
    isOpen.value = false
    isMinimized.value = false
  }
  
  // Minimiser le chat
  const minimizeChat = () => {
    isMinimized.value = !isMinimized.value
  }
  
  // Envoyer un message
  const sendMessage = async () => {
    if (!messageInput.value.trim() || isLoading.value) return
    
    // Ajouter le message de l'utilisateur
    const userMessage: ChatMessage = {
      id: uuidv4(),
      content: messageInput.value,
      isUser: true,
      timestamp: new Date()
    }
    
    messages.value.push(userMessage)
    
    // Réinitialiser l'input et activer le chargement
    const userInput = messageInput.value
    messageInput.value = ''
    isLoading.value = true
    
    try {
      // Appel à notre API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          history: messages.value.slice(-10).map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.content
          }))
        })
      })
      
      if (!response.ok) {
        throw new Error('Erreur de communication avec le serveur')
      }
      
      const data = await response.json()
      
      // Créer la réponse du bot
      const botResponse: ChatMessage = {
        id: uuidv4(),
        content: data.response.content,
        isUser: false,
        timestamp: new Date()
      }
      
      // Ajouter des actions suggérées si présentes dans la réponse
      if (data.suggestions && data.suggestions.length > 0) {
        botResponse.actions = data.suggestions.map((suggestion: string) => ({
          text: suggestion,
          value: suggestion
        }))
      }
      
      // Ajouter la réponse du bot
      messages.value.push(botResponse)
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
      
      // Réponse de secours en cas d'erreur
      const fallbackResponse: ChatMessage = {
        id: uuidv4(),
        content: "Oups, j'ai un petit souci de communication. Tu peux réessayer dans un instant ?",
        isUser: false,
        timestamp: new Date(),
        actions: [
          { text: "Réessayer", value: userInput }
        ]
      }
      
      messages.value.push(fallbackResponse)
      toastStore.error('💩 Coach est momentanément indisponible. Réessaie dans quelques instants.')
    } finally {
      isLoading.value = false
    }
  }
  
  // Gérer les actions suggérées
  const handleSuggestedAction = (action: ChatAction) => {
    // Ajouter l'action comme un message de l'utilisateur
    messages.value.push({
      id: uuidv4(),
      content: action.text,
      isUser: true,
      timestamp: new Date()
    })
    
    // Déclencher la réponse comme si c'était un message normal
    messageInput.value = action.value
    sendMessage()
  }
  
  // Exposer la méthode openChat pour être appelée depuis d'autres composants
  defineExpose({
    openChat
  })
  </script>