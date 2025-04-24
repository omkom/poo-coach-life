# 🧱 ARCHITECTURE — poo-coach.life

Ce document présente l’architecture technique de l’application `poo-coach.life`, fondée sur Nuxt 3 avec une organisation modulaire, évolutive et propice à la collaboration.

---

## 🧠 Stack principale

- **Framework Frontend** : Nuxt 3 (Vue.js 3 + Composition API + App Router)
- **Langage** : TypeScript
- **Style** : TailwindCSS
- **i18n** : Nuxt I18n (FR, EN US/UK, ES)
- **Backend/API** : Nuxt Server API / GPT OpenAI
- **DB (V2)** : PostgreSQL via Prisma ORM
- **CI/CD** : GitHub + Docker + (Vercel/Render à définir)
- **Containerisation** : Docker / docker-compose

---

## 📁 Structure de projet (résumée)
app/
 ├── app.vue # Point d’entrée de l'app Nuxt 
 ├── assets/ # Images, icônes, fichiers statiques 
 ├── components/ # Composants UI globaux 
 ├── composables/ # Fonctions utilitaires (useX) 
 ├── content/ # Recettes/articles en .md (si mode contenu statique) 
 ├── docs/ # SPECS.md, STYLEGUIDE.md, etc. 
 ├── i18n/ # Traductions JSON par langue 
 ├── layouts/ # Layouts Nuxt (default, minimal) 
 ├── nuxt.config.ts # Config Nuxt 
 ├── pages/ # Pages Nuxt (.vue) 
 ├── plugins/ # Plugins Nuxt (chat, calendar, etc.) 
 ├── prisma/ # Schéma et ORM (schema.prisma) 
 ├── public/ # Static assets 
 ├── server/api/ # Endpoints server (chatbot, recettes) 
 ├── tailwind.config.ts # Config Tailwind 
 ├── tsconfig.json # Config TypeScript 
 └── utils/ # Fonctions JS/TS pures

---

## 📦 Architecture logique

### 1. Modules principaux

- 🧠 `GPT` : API d’appel vers OpenAI avec prompt système personnalisé
- 📅 `Calendar` : intégration Google Calendar (.ics ou API)
- 📥 `Recipes` : lecture JSON/Markdown ou via BDD Prisma (V2)
- 💬 `Chat` : Composant flottant Vue + dialogue GPT
- 🛒 `Shop` : Données produits affiliés, affichage grid + liens

---

### 2. Organisation i18n

- Fichiers JSON dans `/app/i18n`
- Stratégie par langue : `fr.json`, `en.json`, `es.json`
- Adaptation du ton + expressions locales
- Chargement lazy des langues dans `nuxt.config.ts`

---

### 3. Déploiement & environnement

- Docker (local dev & preview)
- Variables `.env` gérées dans `.env` / `.env.local`
  - `NUXT_PUBLIC_API_URL`
  - `OPENAI_API_KEY`
  - `DATABASE_URL`
- Build Docker optimisé (multi-stage) en prod

---

## 🧪 Tests (prévu V1.2)

- **Tests composants** : Vitest + Vue Test Utils
- **Tests accessibilité** : axe-core + lighthouse
- **Lint / Format** : ESLint, Prettier, Husky (hook git commit)

---

## 🔐 Sécurité & données

- Aucune donnée sensible stockée en clair
- Données de navigation anonymisées (si analytics)
- Comportement du chat sans traçage identifiable
- RGPD-ready : cookies uniquement opt-in (Didomi ou équivalent)
- Auth & profils (V2) : localStorage + cryptage des stats