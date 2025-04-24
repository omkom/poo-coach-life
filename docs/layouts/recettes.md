# 🧱 LAYOUT — Page `/recettes`

## 🎯 Objectif
Proposer une interface claire, motivante et utile pour permettre aux utilisatrices de trouver **des recettes digestes**, adaptées à leur niveau, leur humeur, leurs contraintes et leur progression personnelle.

---

## 🧩 Composants présents

| Composant             | Rôle                                                      |
|----------------------|-----------------------------------------------------------|
| `RecipeFilters.vue`  | Affichage des filtres dynamiques                         |
| `RecipeGrid.vue`     | Grille responsive des recettes                           |
| `RecipeCard.vue`     | Aperçu d’une recette (image, durée, tag, 💩 score)       |
| `Pagination.vue`     | Navigation entre pages de recettes                       |
| `AddToCalendar.vue`  | (intégré dans la carte) Ajout de la recette à l’agenda   |
| `TagLegend.vue`      | Légende interactive pour expliquer les tags              |
| `EmptyState.vue`     | Message d'encouragement quand aucun résultat n’est trouvé|

---

## 🔍 Filtres disponibles

### ⏱ Durée de préparation
- < 10 min
- 10–20 min
- 20–40 min

### 🧑‍🍳 Niveau d’aisance en cuisine
- Nulle en cuisine
- Je débute mais j’ai envie de me dépasser
- Je suis à l’aise et je veux aller plus loin

### 💰 Budget
- Très économique
- Prix doux
- Flexible / tous les ingrédients dispo

### 🍽 Type de repas
- Petit-déjeuner
- Déjeuner léger
- Dîner cocooning
- Snack digeste

### 🎯 Objectif digestion
- Anti-ballonnement
- Booster du transit
- Repos digestif
- Recharger sans lourdeur

### 🧘 Contexte émotionnel
- Je suis stressée
- Je suis fatiguée
- Je veux prendre soin de moi

---

## 🏷️ Tags à afficher sur chaque recette

| Tag                        | Description rapide                              |
|---------------------------|--------------------------------------------------|
| 💩 Score                  | Indice de digestion douce                       |
| 🚀 Rapide                 | Recette en moins de 10 min                      |
| 💡 Facile                 | Aucun matériel ou technique compliqué           |
| 🧺 Batchable              | Peut se préparer en quantité / pour 3 jours     |
| 🧻 Transit+               | Favorise clairement l’élimination naturelle      |
| 🍲 Réconfort              | Texture chaude, douce, enveloppante             |
| 🧠 Équilibrée             | Bon ratio fibres / protéines / sucres lents     |
| 🫶 Douce pour le ventre   | Peu de résidus, cuisson adaptée, texture light  |
| 🧊 Se conserve bien       | Peut être stockée 2–3 jours sans souci          |
| 🫗 Tisane associée        | Propose une boisson en accord                   |

---

## 📱 Comportement responsive
- Sur mobile : `RecipeFilters.vue` devient un accordéon réductible
- `RecipeGrid.vue` passe en une colonne
- Tags visibles sous forme de pastilles + couleurs symboliques
- Ajout rapide à l’agenda depuis la carte (sans rechargement)

---

## 🤖 Intégration future avec 💩 Coach
- Possibilité de demander : “Je veux un dîner léger pour ce soir avec 15 minutes devant moi”
- Génération d’un lien direct vers les recettes filtrées automatiquement

---

## 🧠 Intégration SEO & Schema.org pour recettes
Pour chaque recette, ajouter des données structurées [schema.org/Recipe](https://schema.org/Recipe) avec les champs suivants :

- `@type`: "Recipe"
- `name`: Titre de la recette
- `description`: Courte description digeste et fonctionnelle
- `image`: Lien vers l’image principale
- `author`: {"@type": "Person", "name": "💩 Coach"}
- `prepTime`: ISO 8601 (ex: "PT20M")
- `cookTime`: ISO 8601 (ex: "PT10M")
- `totalTime`: ISO 8601
- `recipeYield`: Portion ou nombre de personnes
- `recipeCategory`: ex: "Dîner léger", "Batch digestif"
- `recipeCuisine`: "Digestion-friendly"
- `keywords`: Tags digestifs (ballonnement, batch, fibres...)
- `recipeIngredient`: Liste des ingrédients
- `recipeInstructions`: Liste des étapes (texte ou objet HowToStep)
- `nutrition`: (optionnel) Données simplifiées si connues (ex: "fibres": "4g")
- `video`: (optionnel mais recommandé) – JSON:
  ```json
  {
    "@type": "VideoObject",
    "name": "Préparation de [recette]",
    "description": "Étapes pour réaliser la recette facilement",
    "thumbnailUrl": "https://example.com/thumb.jpg",
    "uploadDate": "2025-04-24",
    "contentUrl": "https://example.com/video.mp4"
  }
  ```

---
