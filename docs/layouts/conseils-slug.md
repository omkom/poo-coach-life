# 📗 LAYOUT — Page `/conseils/[slug]`

## 🎯 Objectif
Proposer un article long format approfondi sur un sujet digestif, avec informations concrètes et rassurantes, et guider vers des actions simples.

---

## 🧩 Composants de la page `/conseils/[slug]`

- `ArticleHeader.vue` : titre de l’article, date, auteur, tags, image de couverture
- `MarkdownRenderer.vue` : rendu du contenu en markdown avec styles cohérents
- `SideQuote.vue` : citations ou encadrés d’astuces ou témoignages
- `TableOfContents.vue` : sommaire interactif pour naviguer dans l’article (optionnel)
- `ArticleFooter.vue` : liens vers articles similaires, bouton de partage et commentaires

---

## UX

- Lecture fluide : typographie lisible, interlignage adapté
- Encadrés visuels pour éléments clés (citations, listes, checklists)
- Options de partage social et passage en mode clair/obscur

---

## SEO

- Balises meta dynamiques (`title`, `description`, `og:*`)
- Schéma `Article` ou `BlogPosting` de schema.org pour renforcer le référencement
- Intégration de `FAQPage` si des questions-réponses sont incluses

---

## 📲 Comportement responsive

- Table des matières déplacée sous le contenu principal sur mobile
- Encadrés et images adaptatifs
- Éléments interactifs accessibles au toucher