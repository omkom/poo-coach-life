---
# 🔐 LAYOUT — Page `/connexion`
---

## 🎯 Objectif
Permettre à l’utilisatrice de se connecter ou de s’inscrire facilement et de façon sécurisée pour accéder à son espace personnel.

---

## 🧩 Composants de la page `/connexion`
- `AuthForm.vue` : formulaire de connexion / inscription (email, mot de passe ou magic link)
- `OAuthButtons.vue` (optionnel) : boutons de connexion via Google, Apple, etc.
- `RememberMe.vue` : checkbox « Rester connecté·e »
- `ForgotPasswordLink.vue` : lien pour réinitialiser le mot de passe
- `AuthHeader.vue` : titre, sous-titre et illustration friendly
- `FormError.vue` : affichage des erreurs de validation
- `SuccessMessage.vue` : confirmation d’inscription ou envoi du lien de connexion
- `DataPolicyNotice.vue` : rappel RGPD et traitement des données personnelles

---

## UX
- Interface claire, minimaliste et rassurante
- Feedback inline sur chaque champ (valid/erreur)
- Transitions douces entre les états connexion, inscription et mot de passe oublié
- Illustrations ou micro-interactions pour dédramatiser l’expérience

---

## SEO
- Meta `title` : « Connexion — 💩 Coach »
- Meta `description` : « Connectez-vous pour gérer votre espace personnel 💩 Coach »

---

## 📲 Comportement responsive
- Formulaire centré avec largeur adaptative selon l’écran
- Champs et boutons optimisés pour mobile (touch targets adaptées)
- Navigation clavier et accessibilité ARIA vérifiées