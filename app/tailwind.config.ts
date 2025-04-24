import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales (brand)
        'primary': '#A0522D',     // Brun doux - boutons principaux
        'success': '#98FB98',     // Vert menthe léger - validations
        'background': '#F5F5DC',  // Beige neutre - fond de pages
        'neutral': '#D3D3D3',     // Gris chaud - bordures, éléments désactivés
        
        // Couleurs secondaires (UI + statut)
        'warning-soft': '#FFC1C1', // Rouge pastel - erreurs non critiques
        'warning': '#FFF8DC',     // Jaune crème - avertissements
        'info': '#CFEFFF',        // Bleu léger - informations
        'chat-bg': '#F3E5F5',     // Lilas pâle - arrière-plan du bot
        'dark': '#4E342E',        // Brun profond - dark mode (v1.1)
      },
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
} satisfies Config