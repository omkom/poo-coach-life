# 📫 Layout & stratégie — Emailing 💩 Coach

## Objectif
Maintenir un lien drôle, utile et respectueux avec l’utilisatrice, sans pression, dans un cadre bienveillant, régulier, et toujours orienté “petite action utile aujourd’hui”.

---

## 🧠 Ton & intention

| Élément          | Style 💩 Coach                                  |
|------------------|------------------------------------------------|
| Fréquence        | 1 fois par semaine (max)                       |
| Longueur         | 250 à 600 mots                                |
| Structure        | 1 conseil + 1 action + 1 ressource            |
| Sujet de mail    | Phrase naturelle, imagée, jamais médicale     |
| Expéditeur       | 💩 Coach (ou prénom fictif friendly)           |

---

## 📬 Types d’emails prévus

### 1. 🧃 Digestive Inspiration Weekly
> L’email principal, chaque lundi matin  
Contenu :
- Micro-conseil simple
- Recette de la semaine
- Lien vers un article utile
- Bonus : “Action digestive du jour”

---

### 2. 🧘‍♀️ Routine douce du vendredi
> Respiration, étirement, infusion du week-end  
Contenu :
- Image ou gif simple
- Rappel émotionnel : prendre soin de soi
- Invitation à tester une routine

---

### 3. 💩 SOS Digestif Express
> Optionnel, activé en cas de recherche d’info spécifique  
Ex : “Ballonnée ? Voici le trio d’urgence”  
Peut être déclenché manuellement par la lectrice via son dashboard

---

### 4. 🎁 Email cadeau / promo
> Contenu utile + lien affilié ou bon d’achat (testé, transparent)  
Contenu :
- Produit sélectionné
- Pourquoi il est pertinent
- Code promo
- Astuce liée

---

## 📥 Inscription & gestion

### Composants liés :
- `NewsletterSignup.vue` (présent sur homepage & recettes)
- `ConsentNotice.vue` (respect RGPD + humour visible)
- `EmailPreferences.vue` (dashboard utilisateur)

---

## 🎨 Design UI

- Couleurs douces, titres marrants
- Émojis digestifs utilisés intelligemment (💩, 🧘‍♀️, 🍵, 🍑)
- Responsive : très bon affichage mobile
- Option HTML + texte brut

---

## 🛠️ Technique

- Plateforme envisagée : Sendinblue / Mailjet / Buttondown / custom SMTP
- Tracking anonymisé
- Consentement double opt-in (Didomi ou interne)

---

## 🧪 V1.2 — Abonnements intelligents

- Possibilité de choisir son rythme (1/semaine ou 1/mois)
- Curations par profil (Batch Queen / Feignante Zen / Fragile Gourmande)
- Emails déclenchés par interaction (ex. lecture recette = envoi batch)

---
