#!/bin/bash

echo "🚽 Initialisation du projet poo-coach.life"

# Cloner le repo si ce n'est pas déjà fait
# git clone https://github.com/omkom/poo-coach-life.git
cd app || exit 1

# Créer les dossiers de structure
mkdir -p pages components layouts plugins public assets composables utils i18n prisma content docs server/api

# Créer les fichiers vides nécessaires à Nuxt 3
touch app.vue nuxt.config.ts tsconfig.json tailwind.config.ts .gitignore

# Créer des fichiers d’exemple pour Prisma
touch prisma/schema.prisma

# Créer les fichiers de documentation
touch docs/SPECS.md docs/STYLEGUIDE.md docs/GPT-PROMPT.md docs/ROADMAP.md

# Créer les fichiers de config
touch README.md package.json

# Remonter au directory parent
cd ..

# Initialiser Git si pas encore fait
if [ ! -d ".git" ]; then
  git init
  git remote add origin https://github.com/omkom/poo-coach-life.git
fi

echo "✅ Structure du projet créée avec succès."
echo "Tu peux maintenant ouvrir le dossier dans VS Code ou ton éditeur préféré."

# Fin

