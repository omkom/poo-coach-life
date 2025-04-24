// app/nuxt.config.ts
export default defineNuxtConfig({
    app: {
      head: {
        title: '💩 Coach - poo-coach.life',
        htmlAttrs: {
          lang: 'fr'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { 
            hid: 'description', 
            name: 'description', 
            content: 'Accompagnement doux, bienveillant et efficace pour les femmes souffrant de côlon paresseux. Recettes digestes, routines bien-être et conseils personnalisés.'
          },
          { name: 'theme-color', content: '#A0522D' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,600;1,400&family=Roboto+Mono&display=swap' }
        ]
      }
    },
    
    // Modules essentiels
    modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/i18n',
      '@pinia/nuxt',
    ],
    
    // Configuration i18n
    i18n: {
      locales: [
        { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
        { code: 'en', iso: 'en-US', file: 'en.json' },
        { code: 'es', iso: 'es-ES', file: 'es.json' }
      ],
      defaultLocale: 'fr',
      strategy: 'prefix_except_default',
      lazy: true,
      langDir: 'i18n/',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_lang',
        redirectOn: 'root',
      }
    },
    
    // Ajout de configuration Vite pour alias et imports
    vite: {
      optimizeDeps: {
        include: ['vue', 'vue-router', 'pinia']
      }
    },
    
    // Variables d'environnement publiques
    runtimeConfig: {
      public: {
        apiBase: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000/api'
      },
      // Variables privées (côté serveur)
      openaiApiKey: process.env.OPENAI_API_KEY
    }
  })