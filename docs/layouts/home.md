# 🏠 LAYOUT — Page d'accueil `/`

## 🎯 Objectif de la landing page
Créer une expérience immédiate, engageante et différenciante pour :
- Présenter la mission de 💩 Coach sans détour
- Susciter la curiosité et la confiance
- Démontrer la valeur ajoutée des contenus et de l’agent
- Inciter à interagir avec le mini-chat, s’abonner, ou consulter une recette

Cette page incarne **l’équilibre entre utilité, humour, design de santé bienveillant et performance SEO**.

---

## 🧩 Composants clés de la page `/`

### 1. `HeroHeader.vue`
**Structure** :
- Titre fort : “💩 Coach — enfin des conseils de merde (utiles)”
- Sous-titre : mission claire en une phrase
- CTA : “Parle à 💩 Coach” (ancre ou mini-chat ouvert)
- Illustration ou animation intestinale friendly

### 2. `ChatLauncher.vue`
- Flottant en bas à droite
- Icône animée 💩
- Interaction rapide avec 💩 Coach dès la première visite

### 3. `FeaturesGrid.vue`
**Grille de 3 à 6 blocs** illustrés décrivant les bénéfices :
- Des recettes qui font du bien au ventre
- Un chatbot sans tabou (et sans jugement)
- Une méthode douce pour un quotidien plus léger
- Des routines qui ne stressent pas plus que ton transit

### 4. `TestimonialsCarousel.vue`
- Témoignages réels ou stylisés d’utilisatrices
- Format court, rassurant, drôle, illustré

### 5. `MiniShopPreview.vue`
- Teaser boutique avec 3 produits digestes ou à venir
- Produits affiliés recommandés ou en préparation

### 6. `NewsletterSignup.vue`
- Composant d’inscription ludique : “Reçois une bonne 💩 dose de motivation chaque semaine”
- Consentement explicite (RGPD)
- Champ mail + CTA amusant “J’ai envie de m’y mettre”

### 7. `SectionDigestiveCycle.vue` *(ambitieux)*
- Représentation visuelle animée d’un cycle digestif amélioré
- Associe recette + routine + repos + tisane + 💩 Coach + résultat

### 8. `SectionFAQ.vue`
- Questions typiques traitées par 💩 Coach
- Format accordéon / interactif avec émojis et métaphores

### 9. `Footer.vue`
- Navigation secondaire, mentions, RGPD, liens boutique, langues

---

## 📲 Comportement responsive
- Animation du Hero responsive (remplacée par illustration légère sur mobile)
- Tous les blocs sont empilés logiquement et CTA toujours visible
- ChatLauncher toujours accessible (pas masqué sur mobile)

---

## 🤖 Intégrations spéciales
- Mini chat 💩 Coach accessible sans rechargement, dès scroll ou inactivité
- Tracking anonymisé des interactions : clics sur recettes, CTA, engagement
- Chargement différé des carrousels, lazy load illustrations, animation Lottie

---

## 🧬 Ambition SEO et structure sémantique
- Titre `h1` = bénéfice clair + mot-clé digestion ("coach digestion douce")
- Sections `h2` structurées selon parcours utilisateur (problème → solution)
- Rich snippet schema.org : WebPage, FAQs, Product, Testimonial

---

## ✨ Objectif émotionnel et narratif
> L’utilisateur doit quitter la page avec le sentiment :
> “J’ai enfin trouvé un site qui parle vrai, qui me comprend, et qui m’aide — même pour ça.”

