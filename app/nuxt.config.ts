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
      '@pinia/nuxt',
    ],
    
    // Module i18n configurations
    i18n: {
      locales: [
        { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
        { code: 'en', iso: 'en-US', file: 'en.json' },
        { code: 'es', iso: 'es-ES', file: 'es.json' }
      ],
      defaultLocale: 'fr',
      strategy: 'prefix_except_default',
      langDir: 'i18n/',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_lang',
        redirectOn: 'root',
      }
    },
    
    // Builds - pour compatibilité et optimisations
    build: {
      transpile: ['vue-i18n']
    },
    
    // Auto-imports pour éviter les imports manuels répétitifs
    imports: {
      dirs: ['store']
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
    },
    
    // Personnalisation des routes
    routeRules: {
      // Exemple: cache statique pour les pages de contenu
      '/a-propos': { static: true },
      // Exemple: redirection
      '/about': { redirect: '/a-propos' }
    },
    
    // Configuration pour Pinia (state management)
    pinia: {
      autoImports: ['defineStore', 'storeToRefs']
    },
    
    // Modules TypeScript
    typescript: {
      strict: true,
      typeCheck: true
    }
  })

function defineNuxtConfig(arg0: {
    app: { head: { title: string; htmlAttrs: { lang: string; }; meta: ({ charset: string; } | { name: string; content: string; } | { hid: string; name: string; content: string; })[]; link: ({ rel: string; type: string; href: string; } | { rel: string; href: string; })[]; }; };
    // Modules essentiels
    modules: string[];
    // Module i18n configurations
    i18n: { locales: { code: string; iso: string; file: string; }[]; defaultLocale: string; strategy: string; langDir: string; detectBrowserLanguage: { useCookie: boolean; cookieKey: string; redirectOn: string; }; };
    // Builds - pour compatibilité et optimisations
    build: { transpile: string[]; };
    // Auto-imports pour éviter les imports manuels répétitifs
    imports: { dirs: string[]; };
    // Ajout de configuration Vite pour alias et imports
    vite: { optimizeDeps: { include: string[]; }; };
    // Variables d'environnement publiques
    runtimeConfig: {
        public: { apiBase: string; };
        // Variables privées (côté serveur)
        openaiApiKey: string;
    };
    // Personnalisation des routes
    routeRules: {
        // Exemple: cache statique pour les pages de contenu
        '/a-propos': { static: boolean; };
        // Exemple: redirection
        '/about': { redirect: string; };
    };
    // Configuration pour Pinia (state management)
    pinia: { autoImports: string[]; };
    // Modules TypeScript
    typescript: { strict: boolean; typeCheck: boolean; };
}) {
    throw new Error("Function not implemented.");
}
