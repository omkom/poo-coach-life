<!-- app/pages/index.vue -->
<template>
    <div>
      <!-- Hero Section -->
      <section class="bg-background py-12 md:py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
                {{ $t('home.hero.title') }}
              </h1>
              <p class="text-gray-600 text-lg md:text-xl mb-8">
                {{ $t('home.hero.subtitle') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  to="/recettes"
                >
                  {{ $t('home.hero.cta') }}
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  @click="openChat"
                >
                  <span class="mr-2">💬</span>
                  {{ $t('global.actions.talk_to_coach') }}
                </Button>
              </div>
            </div>
            <div class="hidden md:block">
              <!-- Hero image or illustration -->
              <img 
                src="/images/hero-illustration.png" 
                alt="💩 Coach illustration" 
                class="max-w-full h-auto"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-title font-bold text-2xl md:text-3xl text-primary text-center mb-12">
            {{ $t('home.features.title') }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Feature 1: Recipes -->
            <div class="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">🥣</div>
              <h3 class="font-title font-bold text-xl text-primary mb-3">
                {{ $t('home.features.recipe.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.features.recipe.description') }}
              </p>
              <NuxtLink to="/recettes" class="text-primary hover:underline font-medium">
                {{ $t('global.actions.read_more') }} →
              </NuxtLink>
            </div>
            
            <!-- Feature 2: Chat -->
            <div class="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">💬</div>
              <h3 class="font-title font-bold text-xl text-primary mb-3">
                {{ $t('home.features.chat.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.features.chat.description') }}
              </p>
              <button 
                @click="openChat" 
                class="text-primary hover:underline font-medium"
              >
                {{ $t('global.actions.try_now') }} →
              </button>
            </div>
            
            <!-- Feature 3: Routines -->
            <div class="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">🧘‍♀️</div>
              <h3 class="font-title font-bold text-xl text-primary mb-3">
                {{ $t('home.features.routines.title') }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ $t('home.features.routines.description') }}
              </p>
              <NuxtLink to="/routines" class="text-primary hover:underline font-medium">
                {{ $t('global.actions.read_more') }} →
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Testimonials Section -->
      <section class="py-12 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="font-title font-bold text-2xl md:text-3xl text-primary text-center mb-12">
            {{ $t('home.testimonials.title') }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Testimonial 1 -->
            <div class="bg-white rounded-xl p-6 shadow">
              <div class="flex items-center mb-4">
                <div class="bg-primary bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span class="text-xl">👩</span>
                </div>
                <div>
                  <h4 class="font-title font-bold">Sophie, 34</h4>
                  <div class="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Je n'aurais jamais pensé que quelques recettes et routines simples changeraient autant mon quotidien. Fini les ballonnements après chaque repas !"
              </p>
            </div>
            
            <!-- Testimonial 2 -->
            <div class="bg-white rounded-xl p-6 shadow">
              <div class="flex items-center mb-4">
                <div class="bg-primary bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span class="text-xl">👩‍🦰</span>
                </div>
                <div>
                  <h4 class="font-title font-bold">Marie, 28</h4>
                  <div class="text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Le chat 💩 Coach est devenu mon meilleur allié. J'adore pouvoir poser des questions sans tabou et recevoir des conseils concrets. Un vrai soulagement !"
              </p>
            </div>
            
            <!-- Testimonial 3 -->
            <div class="bg-white rounded-xl p-6 shadow">
              <div class="flex items-center mb-4">
                <div class="bg-primary bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span class="text-xl">👱‍♀️</span>
                </div>
                <div>
                  <h4 class="font-title font-bold">Julie, 42</h4>
                  <div class="text-yellow-500">★★★★☆</div>
                </div>
              </div>
              <p class="text-gray-600 italic">
                "Après des années de transit paresseux, j'ai enfin trouvé une approche qui me correspond : douce, progressive et sans culpabilisation. Merci 💩 Coach !"
              </p>
            </div>
          </div>
          
          <div class="text-center mt-8">
            <Button variant="ghost" to="/a-propos#temoignages">
              {{ $t('home.testimonials.more') }}
            </Button>
          </div>
        </div>
      </section>
      
      <!-- Newsletter Signup Section -->
      <section class="py-12 bg-primary bg-opacity-10">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="font-title font-bold text-2xl text-primary mb-4">
            Reçois une bonne dose de motivation chaque semaine
          </h2>
          <p class="text-gray-600 mb-6">
            Des conseils digestifs, des recettes douces et des routines simples directement dans ta boîte mail. Sans pression, promis.
          </p>
          
          <form @submit.prevent="subscribeToNewsletter" class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              v-model="newsletterEmail"
              type="email"
              placeholder="ton@email.fr"
              required
              class="flex-1 px-4 py-3 rounded-l-xl sm:rounded-l-xl sm:rounded-r-none border border-neutral focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              variant="primary"
              :disabled="isSubscribing"
              class="px-6 rounded-r-xl sm:rounded-l-none sm:rounded-r-xl"
            >
              <span v-if="isSubscribing">...</span>
              <span v-else>{{ $t('global.actions.subscribe') }}</span>
            </Button>
          </form>
          <p class="text-xs text-gray-500 mt-2">
            En t'inscrivant, tu acceptes notre politique de confidentialité.
          </p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useToastStore } from '../store/toast'
  
  // Pour le formulaire newsletter
  const newsletterEmail = ref('')
  const isSubscribing = ref(false)
  const toastStore = useToastStore()
  
  // Ouvrir le chat
  const openChat = () => {
    if (typeof window !== 'undefined') {
      const event = new Event('open-chat')
      window.dispatchEvent(event)
    }
  }
  
  // Gérer les erreurs d'image
  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement
    target.src = '/images/placeholder.svg'
  }
  
  // S'abonner à la newsletter
  const subscribeToNewsletter = async () => {
    if (!newsletterEmail.value || isSubscribing.value) return
    
    isSubscribing.value = true
    
    try {
      // Simulation d'appel API (remplacer par vrai appel)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Réinitialiser le formulaire
      newsletterEmail.value = ''
      
      // Afficher un toast de confirmation
      toastStore.success(
        "Tu es inscrit(e) à notre newsletter !",
        { title: "Super !" }
      )
      
    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error)
      toastStore.error("Une erreur est survenue lors de l'inscription.")
    } finally {
      isSubscribing.value = false
    }
  }
  </script>