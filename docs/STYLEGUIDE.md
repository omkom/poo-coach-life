# 💩 STYLEGUIDE — poo-coach.life

## 🧭 Objectif du styleguide
Ce document définit l’identité visuelle, la direction éditoriale, la charte UX/UI et les composants graphiques de 💩 Coach.  
Il garantit la cohérence, la lisibilité, et l’impact émotionnel du projet, tout en assumant un ton décalé, bienveillant, et éducatif autour d’un sujet tabou : le syndrome du côlon paresseux.

## 🎨 Identité visuelle

### Nom et logo
- Nom complet : poo-coach.life
- Nom d’usage : 💩 Coach
- Émoji 💩 : intégré dans les interfaces, non dans le logo vectoriel
- Logo SVG : texte arrondi, empathique, avec un sourire intestinal stylisé
- Versions : fond clair, fond foncé, favicon, icône mobile

### Couleurs principales (brand)
| Usage             | Nom               | Hex        | Description |
|------------------|-------------------|------------|-------------|
| Primaire          | Brun doux         | #A0522D    | Identité, boutons principaux |
| Validation        | Vert menthe léger | #98FB98    | Succès, étapes validées     |
| Fond principal    | Beige neutre      | #F5F5DC    | Fond de pages, cartes       |
| Neutre secondaire | Gris chaud        | #D3D3D3    | Bordures, éléments désactivés|

### Couleurs secondaires (UI + statut)
| Usage             | Nom               | Hex        | Description |
|------------------|-------------------|------------|-------------|
| Alerte douce      | Rouge pastel       | #FFC1C1    | Erreurs non critiques, conseils fermes |
| Avertissement     | Jaune crème        | #FFF8DC    | Infos digestives, risques alimentaires |
| Info neutre       | Bleu léger         | #CFEFFF    | Informations générales, statuts |
| Fond chat         | Lilas pâle         | #F3E5F5    | Arrière-plan du bot 💩 Coach |
| Mode sombre       | Brun profond       | #4E342E    | V1.1 - Compatibilité dark mode |

## ✍️ Typographie & voix

### Polices

| Usage           | Police             | Système/Poids |
|----------------|--------------------|----------------|
| Titres         | Montserrat Bold    | Google Fonts |
| Texte courant  | Open Sans Regular  | Google Fonts |
| Astuces / notes| Open Sans Italic   |               |
| UI technique   | Roboto Mono        | Pour code, labels |

### Échelles typographiques

| Élément    | Police             | Taille rem | Emploi typique |
|------------|---------------------|------------|----------------|
| h1         | Montserrat Bold     | 2.25rem    | Pages / sections |
| h2         | Montserrat Bold     | 1.75rem    | Sous-sections |
| h3         | Montserrat SemiBold | 1.5rem     | Titres UI |
| p          | Open Sans Regular   | 1rem       | Texte standard |
| caption    | Open Sans Italic    | 0.875rem   | Notes légères |
| bouton     | Montserrat Medium   | 1rem       | CTA & UI interactifs |

### Ton et langage

| Style visé           | Description |
|----------------------|-------------|
| 🧻 Bienveillant       | Inclusif, jamais culpabilisant |
| 💬 Direct            | Sans détour, mais toujours clair |
| 😂 Drôle             | Humour visuel et verbal, sans vulgarité gratuite |
| 🧠 Éducatif          | Explication simple, jamais médicalisant ni complexe |

**Règle d’or :** _Si le message peut être dit avec un 💩, fais-le. Mais garde la classe._

### Style de contenu rédactionnel

| Faire                                        | Éviter                            |
|---------------------------------------------|-----------------------------------|
| “Tu veux que ça sorte ? Moi aussi.”         | “Tu souffres ? C’est grave.”      |
| “C’est pas de la merde.”                    | “Solution miracle garantie.”      |
| “Bois ta tisane et respire.”                | “Buvez 3L d’eau et faites du sport.” |
| “Faisons de beaux 💩 ensemble.”              | “Traitement du transit intestinal.” |

## 🧩 Composants UI

### Boutons

| Type             | Style                                       |
|------------------|----------------------------------------------|
| Primaire         | Brun doux, texte blanc, arrondi, ombre       |
| Secondaire       | Vert menthe, texte brun                      |
| Danger           | Rouge pastel, texte brun foncé               |
| Ghost            | Transparent, bordure fine                    |
| Icône-only       | Rond, icône centrée, ombre douce             |

### Cartes

- **Recette** : image + nom + durée + 💩 score + bouton  
- **Témoignage** : avatar (ou icône stylisée) + prénom + avis < 250 caractères  
- **Infos digestives** : fond pastel + icône + CTA

### Alertes

| Type    | Couleur         | Icone recommandée |
|---------|------------------|--------------------|
| Succès  | Vert menthe       | ✅ check-circle    |
| Erreur  | Rouge pastel      | ❌ alert-triangle  |
| Info    | Bleu léger        | ℹ️ info-circle     |
| Avert.  | Jaune crème        | ⚠️ warning-circle  |

## 🧠 Composants UX spécifiques

### Chat flottant 💩 Coach
- Flottant en bas à droite
- Icône 💩 animée ou avatar dessiné
- Fenêtre modale, réponse GPT, champs + suggestions rapides

### Formulaires
- Champs arrondis XL, très lisibles
- Labels toujours visibles
- Validation douce avec aide contextuelle
- Navigation au clavier testée

### Ajout au calendrier
- Bouton universel : “📅 Ajouter au calendrier”
- Formats : .ics, intégration Google / Apple / Outlook
- Confirmation via toast

## 🧪 Accessibilité

| Aspect       | Spécification                       |
|--------------|-------------------------------------|
| Police       | Min. 16px sur tous les devices      |
| Navigation   | Entièrement clavier + focus visible |
| Contrastes   | Conformes AA                        |
| Aria labels  | Présents sur tous les composants dynamiques |
| Animation    | Respect du mode "reduce motion"     |

## 📸 Illustrations & Iconographie

- **Style visuel :** flat / cartoon friendly, sans gêne  
- **Icônes :** Lucide, Tabler Icons, Feather, Noun Project (si SVG propre)  
- **Visuels à éviter :**  
  - Photos médicales  
  - Anatomie réaliste  
  - Emojis exagérés façon WhatsApp  
- **Banques recommandées :**  
  - [Undraw](https://undraw.co)  
  - [Humaaans](https://www.humaaans.com)  
  - [Open Peeps](https://www.openpeeps.com)

## 🔮 Projections UI

| Version     | Ajouts visuels attendus                  |
|-------------|-------------------------------------------|
| V1.1        | Dark mode, animation de chargement 💩     |
| V1.2        | Thèmes utilisateur : zen / actif / ballonné |
| V2          | Dashboard santé, stats anonymes, avatars |
| V3          | Personnalisation IA visuelle + UI évolutive |

---
