# 💩 Coach — poo-coach.life

> _C’est pas de la merde. Juste enfin de bons conseils._

**poo-coach.life** est une plateforme web humoristique, bienveillante et scientifique, dédiée à l’accompagnement des femmes souffrant de côlon paresseux. Elle propose des recettes digestes, des routines bien-être, un chatbot GPT intégré, un système de calendrier et une boutique douce.

## 🚀 Stack technique

- **Framework** : [Nuxt 3](https://nuxt.com/) (Vue 3, SSR-ready)
- **Langage** : TypeScript
- **Style** : TailwindCSS + Headless UI
- **Base de données** : PostgreSQL (via Supabase ou Prisma)
- **i18n** : `@nuxtjs/i18n` (🇫🇷 🇬🇧 🇺🇸 🇪🇸)
- **GPT** : OpenAI API intégrée via composant de chat
- **Hosting** : Vercel / Netlify (à définir)

## 📁 Arborescence du projet (extrait)

```bash
.
├── app.vue                # Layout racine
├── nuxt.config.ts         # Configuration Nuxt
├── pages/                 # Pages statiques et dynamiques
├── components/            # Composants Vue réutilisables
├── plugins/               # Plugins (GPT, calendriers...)
├── composables/           # Fonctions utiles réactives
├── public/                # Images, favicons
├── i18n/                  # Dictionnaires de traduction
├── content/               # (option) Recettes statiques
├── prisma/                # Schéma BDD + migrations
└── docs/                  # Spécifications et documents internes
```

## 📦 Installation locale

```bash
git clone https://github.com/ton-user/poo-coach.life.git
cd poo-coach.life
npm install
npm run dev
```

## 🧠 Fonctionnalités principales (MVP)

- ✅ Chatbot GPT (💩 Coach) pour menus et conseils digestifs
- ✅ Recettes filtrables avec bouton “ajouter à Google Calendar”
- ✅ Mini boutique avec liens affiliés
- ✅ Témoignages d’utilisatrices et humour bienveillant
- ✅ Traduction multilingue native (fr, en, es)

## 🔐 RGPD & confidentialité

- Aucune donnée sensible requise
- Recettes et commentaires anonymes
- Aucune donnée de santé stockée sans consentement explicite

## 📅 Roadmap (extrait)

- [x] Structure Nuxt + composant Chat
- [x] Pages publiques (Accueil, Recettes, Boutique...)
- [ ] Auth légère (V1)
- [ ] Espace personnel santé & suivi (V2)

## 📄 Liens internes

- [SPECS.md](./docs/SPECS.md)
- [GPT-PROMPT.md](./docs/GPT-PROMPT.md) *(à venir)*
- [STYLEGUIDE.md](./docs/STYLEGUIDE.md) *(à venir)*

---

> Avec 💩, rigueur, et douceur — créé par des gens qui n’ont plus peur de parler de leur caca.

