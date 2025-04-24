# 🤸‍♀️ LAYOUT — Page `/routines`

## 🎯 Objectif
Proposer un catalogue de routines bien-être (mouvements, respirations, méditations) pour accompagner la digestion et réduire le stress au quotidien.

---

## 🧩 Composants de la page `/routines`

- `RoutineFilters.vue` : filtres par durée, intensité, moment de la journée
- `RoutineGrid.vue` : présentation en grille des routines disponibles
- `RoutineCard.vue` : aperçu d’une routine (titre, durée, icône ou image)
- `LoadMore.vue` ou `Pagination.vue` : navigation ou chargement progressif
- `EmptyState.vue` : message encourageant si aucun résultat

---

## UX

- Aperçu rapide de la durée et du niveau de difficulté
- Bouton « Voir la routine » pour accéder au détail complet
- Favoris et partage via `FavoriteButton.vue` et `ShareButton.vue`

---

## SEO

- Schéma `ExercisePlan` ou `HowTo` de schema.org pour chaque routine
- Meta `title`/`description` optimisés pour “routines digestion” et “bien-être”

---

## 📲 Comportement responsive

- Grille adapte le nombre de colonnes (1 sur mobile, 2–3 sur desktop)
- Filtres accessibles via menu déroulant sur mobile
- Zones tactiles optimisées pour la sélection des routines