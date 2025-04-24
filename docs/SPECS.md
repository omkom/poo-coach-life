# 💩 Coach — Cahier des charges fonctionnel (SPECS.md)

## 🧭 Objectif du projet
Créer une plateforme web appelée **poo-coach.life** dédiée à l’accompagnement des femmes souffrant de côlon paresseux. Le site proposera des recettes digestes, des conseils pratiques, des routines bien-être, un chatbot intelligent (💩 Coach), une boutique, une communauté, et des outils de planification quotidienne.

---

## 🎯 MVP — Fonctionnalités essentielles

### 1. Site public (Nuxt 3 + Vue.js)
- Pages statiques : Accueil, À propos, Recettes, Conseils, Contact, Boutique
- SEO optimisé (title, meta, OG) + SSR via Nuxt
- Système de traduction i18n (🇫🇷 🇬🇧 🇺🇸 🇪🇸) via `@nuxtjs/i18n`
- Composants UI responsives (mobile-first, TailwindCSS)
- Mini système d’abonnement (email seulement dans un premier temps)
- Témoignages utilisateurs (carousel)
- CTA visibles : accès au chat, souscription, accès aux recettes
- Bouton "Ajouter au calendrier" (Google, ICS export)

### 2. Chatbot 💩 Coach
- Intégré via composant Vue + API OpenAI
- Prompt système personnalisé (voir GPT-PROMPT.md)
- Chat flottant ou en page dédiée
- Réponses guidées : menus, recettes, conseils digestifs
- Historique local (pas de login requis au départ)

### 3. Recettes & menus
- Base de données (PostgreSQL + Prisma / Supabase)
- Filtres : type de repas, temps, ingrédient principal
- Bouton “Ajouter au calendrier” (Google Calendar, ICS)
- Export liste de courses (PDF/JSON)
- Ajout de commentaire possible par les utilisatrices (anonyme par défaut)
- Partage de recettes entre utilisatrices

### 4. Boutique affiliée
- Page vitrine : produits bien-être (infusions, carnets, packs digestion…)
- Liens d’affiliation intégrés
- Produits à venir : mugs, sachets, packs personnalisés
- Option “prévenez-moi au lancement” via email

### 5. Gestion des utilisateurs
- Anonymat par défaut (aucune donnée sensible stockée)
- Option de profil facultatif (V2)
- Abonnement email pour bons plans, promos, rappels recettes
- Sécurité maximale RGPD friendly

---

## 🛤️ Feuille de route (Roadmap)

### ✅ MVP
- Landing page multilingue Nuxt
- Chat 💩 Coach opérationnel
- 30+ recettes digestes filtrables
- Intégration Google Calendar + export liste courses
- Mini boutique affiliée avec produits bien-être
- Espace commentaires + partage recettes

### 🔜 V1
- Système d’inscription + personnalisation de menus
- Suivi simple du transit via un journal local
- Envoi automatique de menus par email

### 🔮 V2
- Espace membre + backoffice santé et forme
- Synchronisation mobile + rappels digestifs
- Programme de coaching personnalisé (freemium)
- Module quiz diagnostic + routines dédiées
- API ouverte (intégration avec apps bien-être)

---

## 🔐 Sécurité et confidentialité
- Anonymat total sur les partages/recettes/commentaires
- Aucune donnée de santé stockée sans consentement
- Pas de tracking invasif, conformité RGPD dès le MVP

---

## 🔧 Tech stack (Vue/Nuxt)
- Front : Nuxt 3 + Vue 3 + TypeScript + TailwindCSS + Headless UI
- Backend léger : Supabase (PostgreSQL + API) ou Nuxt Server API
- i18n : `@nuxtjs/i18n`
- GPT : OpenAI SDK (via route API ou plugin)
- Calendrier : Google Calendar API, ICS exporter
- CI/CD : GitHub + Vercel ou Netlify

---

## 🧩 Annexes à prévoir
- `GPT-PROMPT.md`
- `TRANSLATIONS.md`
- `STYLEGUIDE.md`
- `COPYWRITING.md`
- `ROADMAP.md`

---

> Ce document sert de base à toute l’architecture du projet 💩 Coach. Il doit être mis à jour à chaque évolution majeure.


