// app/store/recipes.ts
import { defineStore } from 'pinia'

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl?: string;
  prepTime: number;
  cookTime?: number;
  difficulty: 'easy' | 'medium' | 'hard';
  digestiveScore?: number;
  tags: string[];
  mealType: string;
  digestiveGoal: string;
  ingredients?: string[];
  steps?: { text: string }[];
  nutrition?: Record<string, any>;
}

interface RecipesState {
  recipes: Recipe[];
  favorites: string[]; // IDs des recettes favorites
  loading: boolean;
  error: string | null;
}

export const useRecipesStore = defineStore('recipes', {
  state: (): RecipesState => ({
    recipes: [],
    favorites: [],
    loading: false,
    error: null
  }),
  
  getters: {
    getRecipeBySlug: (state) => (slug: string) => {
      return state.recipes.find(recipe => recipe.slug === slug)
    },
    
    getFavoriteRecipes: (state) => {
      return state.recipes.filter(recipe => state.favorites.includes(recipe.id))
    },
    
    isFavorite: (state) => (id: string) => {
      return state.favorites.includes(id)
    }
  },
  
  actions: {
    async fetchRecipes() {
      this.loading = true
      this.error = null
      
      try {
        // Simulation d'appel API
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Mock de données pour le développement
        const mockRecipes: Recipe[] = [
          {
            id: '1',
            slug: 'smoothie-banane-lin',
            title: 'Smoothie banane et graines de lin',
            description: 'Un délicieux smoothie riche en fibres solubles pour un réveil en douceur.',
            imageUrl: 'https://images.unsplash.com/photo-1528714652565-e9142cf75110?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            prepTime: 5,
            difficulty: 'easy',
            digestiveScore: 4,
            tags: ['batchable', 'transit_plus', 'gentle'],
            mealType: 'breakfast',
            digestiveGoal: 'transitBoost',
            ingredients: [
              '1 banane bien mûre',
              '1 cuillère à soupe de graines de lin moulues',
              '200ml de lait végétal (amande, avoine...)',
              '1 cuillère à café de miel ou sirop d\'érable (optionnel)',
              'Une pincée de cannelle'
            ],
            steps: [
              { text: 'Éplucher et couper la banane en morceaux.' },
              { text: 'Placer tous les ingrédients dans un blender.' },
              { text: 'Mixer jusqu\'à obtenir une texture lisse et homogène.' },
              { text: 'Servir immédiatement et consommer dans l\'heure pour profiter des bienfaits.' }
            ]
          },
          {
            id: '2',
            slug: 'saumon-patate-douce',
            title: 'Saumon et purée de patate douce',
            description: 'Un plat complet et sain, riche en oméga 3 et en fibres douces.',
            imageUrl: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            prepTime: 15,
            cookTime: 20,
            difficulty: 'medium',
            digestiveScore: 5,
            tags: ['comfort', 'balanced', 'gentle'],
            mealType: 'dinner',
            digestiveGoal: 'digestiveRest',
            ingredients: [
              '1 pavé de saumon (environ 150g)',
              '1 patate douce moyenne',
              '1 cuillère à soupe d\'huile d\'olive',
              'Thym frais ou séché',
              'Sel et poivre',
              'Jus de citron frais'
            ],
            steps: [
              { text: 'Préchauffer le four à 180°C.' },
              { text: 'Éplucher et couper la patate douce en cubes, faire cuire à la vapeur 15 minutes.' },
              { text: 'Placer le pavé de saumon sur une feuille de papier cuisson, arroser d\'huile d\'olive, ajouter le thym, sel et poivre.' },
              { text: 'Cuire le saumon au four pendant 15-18 minutes.' },
              { text: 'Écraser la patate douce en purée, ajouter un filet d\'huile d\'olive.' },
              { text: 'Servir le saumon avec la purée et quelques gouttes de jus de citron.' }
            ]
          },
          {
            id: '3',
            slug: 'porridge-flocons-avoine',
            title: 'Porridge aux flocons d\'avoine',
            description: 'Démarrez la journée avec ce porridge onctueux riche en fibres solubles.',
            imageUrl: 'https://images.unsplash.com/photo-1517093157656-b9eccef01cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            prepTime: 10,
            cookTime: 5,
            difficulty: 'easy',
            digestiveScore: 5,
            tags: ['comfort', 'transit_plus', 'storable'],
            mealType: 'breakfast',
            digestiveGoal: 'transitBoost',
            ingredients: [
              '50g de flocons d\'avoine',
              '250ml de lait végétal ou d\'eau',
              '1 cuillère à café de miel ou sirop d\'érable',
              'Fruits frais ou secs au choix',
              'Cannelle ou vanille (optionnel)'
            ],
            steps: [
              { text: 'Dans une casserole, verser les flocons d\'avoine et le liquide.' },
              { text: 'Porter à ébullition puis réduire le feu et laisser mijoter 5 minutes en remuant régulièrement.' },
              { text: 'Quand la consistance est crémeuse, retirer du feu.' },
              { text: 'Servir dans un bol, ajouter le miel ou sirop, les fruits et les épices.' }
            ]
          }
        ]
        
        this.recipes = mockRecipes
      } catch (error) {
        this.error = 'Erreur lors du chargement des recettes'
        console.error('Erreur lors du chargement des recettes:', error)
      } finally {
        this.loading = false
      }
    },
    
    async getRecipeDetail(slug: string) {
      // Si la recette est déjà dans le store avec tous les détails, pas besoin de la recharger
      const existingRecipe = this.getRecipeBySlug(slug)
      if (existingRecipe && existingRecipe.ingredients && existingRecipe.steps) {
        return existingRecipe
      }
      
      this.loading = true
      this.error = null
      
      try {
        // Simulation d'appel API pour obtenir les détails complets
        await new Promise(resolve => setTimeout(resolve, 300))
        
        // Dans un vrai cas d'usage, on ferait un appel API ici
        // Pour le mock, on utilise les données déjà présentes
        return this.getRecipeBySlug(slug)
      } catch (error) {
        this.error = `Erreur lors du chargement de la recette: ${slug}`
        console.error(`Erreur lors du chargement de la recette ${slug}:`, error)
        return null
      } finally {
        this.loading = false
      }
    },
    
    toggleFavorite(id: string) {
      const index = this.favorites.indexOf(id)
      if (index === -1) {
        // Ajouter aux favoris
        this.favorites.push(id)
        // Sauvegarder dans localStorage
        localStorage.setItem('favoriteRecipes', JSON.stringify(this.favorites))
      } else {
        // Retirer des favoris
        this.favorites.splice(index, 1)
        // Mettre à jour localStorage
        localStorage.setItem('favoriteRecipes', JSON.stringify(this.favorites))
      }
    },
    
    loadFavorites() {
      // Charger les favoris depuis localStorage
      const storedFavorites = localStorage.getItem('favoriteRecipes')
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites)
      }
    }
  }
})