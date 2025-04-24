<!-- app/components/layout/Footer.vue -->
<template>
    <footer class="bg-background border-t border-neutral border-opacity-20 py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo et tagline -->
          <div>
            <div class="flex items-center mb-4">
              <span class="text-2xl mr-2">💩</span>
              <span class="font-title font-bold text-xl text-primary">Coach</span>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              {{ $t('global.tagline') }}
            </p>
            <div class="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-opacity-80">
                <span class="sr-only">Instagram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-opacity-80">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Navigation -->
          <div>
            <h3 class="font-title font-bold text-primary mb-4">
              {{ $t('global.footer.explore') }}
            </h3>
            <ul class="space-y-2">
              <li v-for="item in navItems" :key="item.to">
                <NuxtLink :to="item.to" class="text-gray-600 hover:text-primary text-sm">
                  {{ item.label }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/mentions-legales" class="text-gray-600 hover:text-primary text-sm">
                  {{ $t('global.footer.legal') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/politique-confidentialite" class="text-gray-600 hover:text-primary text-sm">
                  {{ $t('global.footer.privacy') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h3 class="font-title font-bold text-primary mb-4">
              {{ $t('global.footer.stay_informed') }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">
              Reçois des conseils pour ton transit et des recettes digestes chaque semaine.
            </p>
            <form @submit.prevent="subscribeToNewsletter" class="flex">
              <input
                v-model="email"
                type="email"
                placeholder="ton@email.fr"
                required
                class="flex-1 px-3 py-2 rounded-l-xl border border-neutral focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                class="bg-primary text-white font-medium px-4 py-2 rounded-r-xl hover:bg-opacity-90"
                :disabled="isSubscribing"
              >
                <span v-if="isSubscribing">...</span>
                <span v-else>OK</span>
              </button>
            </form>
            <p class="text-xs text-gray-500 mt-2">
              En t'inscrivant, tu acceptes de recevoir nos emails et notre politique de confidentialité.
            </p>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="mt-8 pt-6 border-t border-neutral border-opacity-20 text-sm text-gray-500 text-center">
          <p>© {{ new Date().getFullYear() }} 💩 Coach. {{ $t('global.footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useToastStore } from '../../store/toast'
  
  // État du formulaire newsletter
  const email = ref('')
  const isSubscribing = ref(false)
  
  // Store toast pour les notifications
  const toastStore = useToastStore()
  
  // Navigation items
  const navItems = [
    { to: '/', label: 'Accueil' },
    { to: '/recettes', label: 'Recettes' },
    { to: '/conseils', label: 'Conseils' },
    { to: '/routines', label: 'Routines' },
    { to: '/boutique', label: 'Boutique' },
    { to: '/a-propos', label: 'À propos' }
  ]
  
  // Méthode pour s'abonner à la newsletter
  const subscribeToNewsletter = async () => {
    if (!email.value || isSubscribing.value) return
    
    isSubscribing.value = true
    
    try {
      // Simulation d'appel API (remplacer par vrai appel)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Réinitialiser le formulaire
      email.value = ''
      
      // Afficher un toast de confirmation
      toastStore.success("Tu es inscrit(e) à notre newsletter !", {
        title: "Super !"
      })
      
    } catch (error) {
      console.error('Erreur lors de l\'inscription à la newsletter:', error)
      toastStore.error("Une erreur est survenue lors de l'inscription.")
    } finally {
      isSubscribing.value = false
    }
  }
  </script>