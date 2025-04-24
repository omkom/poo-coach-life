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
- **Automatisation & workflows** : [n8n](https://n8n.io/) pour orchestrer les interactions front/back

## 📁 Arborescence du projet (extrait)

```bash
.
├── .env.example           # Exemple de variables d’environnement
├── docker-compose.yml     # Configuration des services Docker (PostgreSQL, n8n…)
├── init.sh                # Script d’installation & initialisation
├── app.vue                # Layout racine Nuxt
├── app/                   # Code source Nuxt 3 (pages, components, plugins, server/api…)
├── prisma/                # Schéma Prisma & migrations (PostgreSQL)
├── public/                # Fichiers statiques (images, favicons, assets)
├── docs/                  # Documentation interne
│   ├── layouts/           # Specs de pages (layout)
│   ├── ARCHITECTURE.md    # Architecture technique
│   ├── SPECS.md           # Cahier des charges fonctionnel
│   ├── DATA-MODEL.md      # Modèle de données Prisma & ERD
│   └── …                  # Autres docs (STYLEGUIDE, ROUTES, CONTENT-STRATEGY…)
├── package.json           # Scripts, dépendances
├── tailwind.config.ts     # Configuration TailwindCSS
├── nuxt.config.ts         # Configuration Nuxt 3 & modules
└── tsconfig.json          # Configuration TypeScript
``` 

## 📦 Installation locale

```bash
git clone https://github.com/ton-user/poo-coach.life.git
cd poo-coach.life
# Copier l’exemple de variables d’environnement
cp .env.example .env
# Installer les dépendances et initialiser la BDD + services
npm install
./init.sh            # initialise la BDD et les migrations
docker-compose up -d # lance PostgreSQL, n8n, etc.
# Démarrer le serveur en mode développement
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

