# ✉️ LAYOUT — Page `/contact`

## 🎯 Objectif
Permettre à l’utilisatrice de poser des questions, partager des retours ou signaler un problème, tout en garantissant la confidentialité et la simplicité du parcours.

---

## 🧩 Composants de la page `/contact`

- `ContactForm.vue` : champs nom (optionnel), email, sujet, message
- `SuccessMessage.vue` : confirmation d’envoi avec ton décalé et rassurant
- `DataPolicyNotice.vue` : rappel RGPD et traitement des données personnelles
- `FormError.vue` : affichage clair des erreurs de validation

---

## UX

- Formulaire accessible et simple, labels toujours visibles
- Validation en temps réel avec messages clairs
- Boutons et champs arrondis, cohérents avec la charte UI
- Gestion des états : envoi, succès, erreur

---

## SEO

- Meta `title` : “Contact — 💩 Coach”
- Meta `description` : “Contactez l’équipe 💩 Coach pour toute question ou suggestion”

---

## 📲 Comportement responsive

- Champ message réajuste sa hauteur en fonction du texte
- Bouton « Envoyer » bien visible sur mobile
- Navigation clavier optimisée pour l’accessibilité