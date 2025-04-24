<!-- app/components/chat/ChatLauncher.vue (mise à jour) -->
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
        class="fixed bottom-6 right-6 bg-white rounded-xl shadow-lg overflow-hidden z-40 w-full max-w-md"
        style="max-height: 80vh;"
      >
        <!-- Header du chat -->
        <div class="bg-chat-bg p-4 flex justify-between items-center">
          <div class="font-title font-bold text-primary flex items-center">
            <span class="text-xl mr-2">💩</span> 
            <span>Coach</span>
          </div>
          <button 
            @click="closeChat"
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Fermer le chat"
          >
            <svg 
              class="h-5 w-5" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Corps du chat - Messages -->
        <div 
          ref="chatMessagesRef"
          class="overflow-y-auto bg-gray-50"
          style="height: 350px;"
        >
          <ChatMessages 
            :messages="messages" 
            :isLoading="isLoading"
            @action="handleSuggestedAction"
          />
        </div>
        
        <!-- Zone de saisie -->
        <div class="p-4 border-t border-gray-200">
          <form @submit.prevent="sendMessage">
            <div class="flex">
              <input 
                v-model="messageInput"
                type="text" 
                placeholder="Pose ta question à 💩 Coach..."
                class="flex-1 px-4 py-2 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
                :disabled="isLoading"
              />
              <Button 
                type="submit"
                variant="primary"
                class="rounded-l-none rounded-r-xl"
                :disabled="!messageInput.trim() || isLoading"
              >
                <template #icon-right>
                  <svg 
                    class="h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </template>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { v4 as uuidv4 } from 'uuid'
  import { useToastStore } from '@/store/toast'
  
  // Interface pour les messages de chat
  interface ChatMessage {
    id: string;
    content: string;
    isUser: boolean;
    isTyping?: boolean;
    isMarkdown?: boolean;
    timestamp: Date;
    actions?: { text: string; value: string; }[];
  }
  
  // États
  const isOpen = ref(false)
  const messageInput = ref('')
  const chatMessagesRef = ref(null)
  const messages = ref<ChatMessage[]>([])
  const isLoading = ref(false)
  
  // Stores
  const toastStore = useToastStore()
  
  // Ouvrir le chat
  const openChat = () => {
    isOpen.value = true
    // Focus sur l'input après ouverture
    setTimeout(() => {
      const input = document.querySelector('input[type="text"]')
      if (input) {
        input.focus()
      }
    }, 100)
  }
  
  // Fermer le chat
  const closeChat = () => {
    isOpen.value = false
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
      // Simuler un appel API à OpenAI (sera remplacé par un vrai appel)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Créer une réponse simulée
      let botResponse: ChatMessage = {
        id: uuidv4(),
        content: '',
        isUser: false,
        timestamp: new Date()
      }
      
      // Logique simple pour simuler les réponses du coach
      if (userInput.toLowerCase().includes('recette') || userInput.toLowerCase().includes('manger')) {
        botResponse.content = "Je te suggère d'essayer une soupe de carottes et gingembre ce soir. Elle est douce pour ton ventre et facile à digérer. Tu veux la recette complète ?"
        botResponse.actions = [
          { text: "Oui, montre-moi la recette", value: "show_recipe_carrot_ginger" },
          { text: "Non merci, autre suggestion", value: "other_recipe_suggestion" }
        ]
      } else if (userInput.toLowerCase().includes('constip') || userInput.toLowerCase().includes('transit')) {
        botResponse.content = "La constipation peut être frustrante. Commençons par augmenter ton hydratation et ajouter des fibres solubles. As-tu essayé la routine du matin pour stimuler ton transit ?"
        botResponse.actions = [
          { text: "Quelle routine du matin ?", value: "morning_routine" },
          { text: "Quels aliments riches en fibres ?", value: "fiber_rich_foods" }
        ]
      } else if (userInput.toLowerCase().includes('bonjour') || userInput.toLowerCase().includes('salut')) {
        botResponse.content = "Bonjour ! Je suis 💩 Coach, ton alliée pour une digestion plus douce. Comment puis-je t'aider aujourd'hui ?"
        botResponse.actions = [
          { text: "J'ai des ballonnements", value: "bloating_issues" },
          { text: "Je cherche des recettes légères", value: "light_recipes" }
        ]
      } else {
        botResponse.content = "Merci pour ta question. Je suis là pour t'aider avec tout ce qui concerne ta digestion et ton bien-être intestinal. As-tu des symptômes particuliers ou cherches-tu des conseils généraux ?"
        botResponse.actions = [
          { text: "Conseils généraux", value: "general_advice" },
          { text: "Parle-moi des aliments à éviter", value: "foods_to_avoid" }
        ]
      }
      
      // Ajouter la réponse du bot
      messages.value.push(botResponse)
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error)
      toastStore.error('Oups, 💩 Coach est distrait. Réessaie dans un instant.')
    } finally {
      isLoading.value = false
    }
  }
  
  // Gérer les actions suggérées
  const handleSuggestedAction = (action: { text: string; value: string }) => {
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