# 🗺️ ROUTES & STRUCTURE — poo-coach.life

Ce document décrit toutes les routes disponibles du site 💩 Coach, ainsi que les composants associés à chaque page.  
Il sert de base pour le développement frontend, l’organisation du contenu, et l’optimisation SEO.

---

## 🌐 Pages publiques principales

### `/` — **Accueil (Landing Page)**  
**Objectif** : présentation du site, conversion, fun, accès rapide à 💩 Coach

**Composants :**
- HeroHeader.vue
- FeaturesGrid.vue
- ChatLauncher.vue
- TestimonialsCarousel.vue
- MiniShopPreview.vue
- NewsletterSignup.vue
- Footer.vue

---

### `/a-propos` — **À propos**
**Objectif** : raconter l’histoire, poser la philosophie, inspirer confiance

**Composants :**
- PageTitle.vue
- StoryBlock.vue
- CoreValues.vue
- WhoWeAre.vue

---

### `/recettes` — **Catalogue de recettes digestes**
**Objectif** : proposer des idées simples pour relancer le transit

**Composants :**
- RecipeFilters.vue
- RecipeGrid.vue
- RecipeCard.vue
- Pagination.vue

---

### `/recettes/[slug]` — **Recette individuelle**
**Objectif** : présentation claire et complète d'une recette

**Composants :**
- RecipeHeader.vue
- IngredientsList.vue
- PreparationSteps.vue
- TipsBlock.vue
- AddToCalendarButton.vue
- CommentsBlock.vue
- RecipeRating.vue

---

### `/conseils` — **Articles et guides digestifs**
**Objectif** : aider à comprendre, désamorcer, informer sans gêne

**Composants :**
- ArticleGrid.vue
- ArticlePreview.vue
- SidebarTopics.vue
- SearchBar.vue (optionnel)

---

### `/conseils/[slug]` — **Article long format**
**Objectif** : approfondir une thématique (routines, alimentation, digestion, stress...)

**Composants :**
- ArticleHeader.vue
- MarkdownRenderer.vue
- SideQuote.vue
- ArticleFooter.vue

---

### `/boutique` — **Espace produits & affiliations**
**Objectif** : recommander des produits bien-être / digestion + teaser produits 💩 Coach

**Composants :**
- ProductGrid.vue
- ProductCard.vue
- ComingSoon.vue
- FilterPanel.vue

---

### `/contact` — **Page de contact**
**Objectif** : permettre aux utilisatrices de poser des questions ou signaler un souci

**Composants :**
- ContactForm.vue
- SuccessMessage.vue
- DataPolicyNotice.vue

---

## 🔐 Pages projetées (V2+)

### `/connexion`
> Page d’identification pour futur espace personnel

### `/profil`
> Tableau de bord digestif : recettes préférées, journal, stats anonymes

---

## 🔄 Pages systèmes

### `/404` — Erreur 404
**Composants :** Error404.vue  
**Ton** : _“Tu t’es perdu dans tes intestins ?”_

### `/500` — Erreur 500
**Composants :** Error500.vue  
**Ton** : _“Oups, trop de fibres dans les tuyaux…”_

---

## 📦 Composants transverses globaux

| Composant            | Rôle                            |
|----------------------|---------------------------------|
| Navbar.vue           | Navigation principale + langues |
| Footer.vue           | Liens de bas de page            |
| ChatLauncher.vue     | Accès au GPT 💩 Coach            |
| Toast.vue            | Notifications (erreurs, succès) |
| ThemeToggle.vue      | Switch light/dark (V1.1)         |
| LanguageSwitcher.vue | i18n 🇫🇷 🇬🇧 🇺🇸 🇪🇸                |

---

## 📄 Annexes

### Pages Markdown (CMS ou contenu statique dans `/content`)
- Mentions légales (`/mentions-legales`)
- Politique de confidentialité (`/politique-confidentialite`)
- CGU / CGV (si produits ou contenus premium à venir)

---

> Ce fichier est mis à jour à chaque nouvelle route ou composant critique.  
> ✅ Valide aussi pour générer sitemap.xml & navigation SEO.
