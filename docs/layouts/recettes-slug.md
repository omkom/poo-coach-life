# 🍲 Layout `/recettes/[slug]`

## Objectif
Permettre à l’utilisatrice de suivre une recette pas à pas, d’en comprendre les bénéfices digestifs, et d’ajouter facilement au calendrier / ses favoris.

## Structure

- `RecipeHeader.vue` : titre, tag, temps, score digestif 💩
- `IngredientsList.vue` + `PreparationSteps.vue` : étapes détaillées et simples
- `TipsBlock.vue` : Astuces conservation, variantes low effort
- `NutritionInfo.vue` : Fibres, protéines digestes, charge intestinale
- `VideoEmbed.vue` : Démonstration (si disponible)
- `RecipeInteractionBar.vue` : Boutons Favori 💚, Ajouter au calendrier 📅, Partager 🔗
- `CommentThread.vue` : Témoignages, retours anonymes

## UX
- Affichage mobile / desktop fluide
- Impression recette possible (PDF)
- Accessibilité : lecture étape par étape pour malvoyants (V2)

## SEO
- Enrichissement schema.org : `@type: Recipe`, avec vidéo, nutrition, steps, author, image optimisée, etc.
