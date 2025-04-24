# ❓ LAYOUT — Page `/questions`

## 🎯 Objectif
Fournir un accès rapide à des réponses claires et bienveillantes aux questions taboues les plus courantes sur la digestion et le transit.

---

## 🧩 Composants de la page `/questions`

- `QuestionGrid.vue` : affichage des questions sous forme de cartes
- `QuestionCard.vue` : question, réponse courte, lien vers détail ou chat
- `SearchBar.vue` : recherche par mot-clé parmi les questions
- `AccordionList.vue` : accordéon pour afficher/réduire les réponses
- `FeaturedQuestion.vue` : mise en avant d’une question du moment

---

## UX

- Format question/réponse interactif, feedback visuel à l’ouverture
- Suggestions automatiques de questions similaires
- Accès rapide au chat 💩 Coach pour poser une nouvelle question

---

## SEO

- Schéma `FAQPage` de schema.org pour optimiser l’affichage dans les résultats
- Balises meta personnalisées (`title`, `description`) pour chaque question

---

## 📲 Comportement responsive

- Grille devient accordéon vertical sur mobile
- Champs de recherche accessibles en haut de page
- Interaction tactile fluide pour ouverture/fermeture des réponses