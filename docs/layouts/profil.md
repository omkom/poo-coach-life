# 🧑‍💻 Layout `/profil` – Espace personnel 💩 Coach

## Objectif
Permettre à l’utilisatrice de centraliser ses recettes préférées, routines, carnet de transit (V2), et suggestions personnalisées.

## Structure

- `ProfileHeader.vue` : avatar (optionnel), prénom ou pseudo
- `FavoriteTabs.vue` : switch entre Recettes / Routines / Articles
- `DigestiveStats.vue` : indicateurs anonymes (V2)
- `MyBatch.vue` : prochaines recettes ou routines programmées
- `SettingsPanel.vue` : langue, consentement, données

## UX
- Aucun tracking nominatif
- Mode lecture seule sans login dans V1
- Auth optionnelle (email ou magic link)
