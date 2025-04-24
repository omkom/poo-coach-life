# 📊 DATA MODEL — Prisma Schema Overview

Ce document présente les principaux modèles de données et leurs relations pour l’application `poo-coach.life`, gérée via Prisma ORM sur une base PostgreSQL.

## Modèles principaux

### User
- Représente une utilisatrice (optionnellement authentifiée)  
- Anonymat préservé : l’email peut être null jusqu’à opt-in  
```prisma
model User {
  id        Int       @id @default(autoincrement())
  email     String?   @unique
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  // Relations
  comments  Comment[]
  favorites Favorite[]
  batches   Batch[]
  profile   Profile?
}
```

### Recipe
- Recettes digestes disponibles sur la plateforme  
- Contient titre, slug, temps, tags, ingrédients, étapes  
```prisma
model Recipe {
  id          Int       @id @default(autoincrement())
  slug        String    @unique
  title       String
  description String?
  prepTime    Int       // en minutes
  cookTime    Int       // en minutes
  tags        String[]  // ex: ["batchable","anti-ballonnement"]
  ingredients Json      // liste d’ingrédients
  steps       Json      // liste d’étapes de préparation
  imageUrl    String?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  // Relations
  comments    Comment[]
  favorites   Favorite[]
  batches     Batch[]
}
```

### Comment
- Commentaires anonymes ou utilisateur identifié  
```prisma
model Comment {
  id        Int      @id @default(autoincrement())
  content   String
  recipe    Recipe   @relation(fields: [recipeId], references: [id])
  recipeId  Int
  author    User?    @relation(fields: [authorId], references: [id])
  authorId  Int?
  createdAt DateTime @default(now())
}
```

### Favorite
- Recettes mises en favori par l’utilisatrice  
```prisma
model Favorite {
  id        Int      @id @default(autoincrement())
  user      User     @relation(fields: [userId], references: [id])
  userId    Int
  recipe    Recipe   @relation(fields: [recipeId], references: [id])
  recipeId  Int
  createdAt DateTime @default(now())
  @@unique([userId, recipeId])
}
```

### Batch
- Planification : recettes ou routines programmées sur le calendrier  
```prisma
model Batch {
  id         Int      @id @default(autoincrement())
  user       User     @relation(fields: [userId], references: [id])
  userId     Int
  recipe     Recipe   @relation(fields: [recipeId], references: [id])
  recipeId   Int
  scheduled  DateTime // date/heure prévue
  createdAt  DateTime @default(now())
  @@unique([userId, recipeId, scheduled])
}
```

### Product
- Produits affiliés de la boutique  
```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float?
  imageUrl    String?
  affiliateUrl String
  category    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### NewsletterSubscription
- Abonnements email  
```prisma
model NewsletterSubscription {
  id         Int      @id @default(autoincrement())
  email      String   @unique
  frequency  String   // ex: "weekly", "monthly"
  consent    Boolean  @default(false)
  createdAt  DateTime @default(now())
}
```

### Routine
- Routines bien-être (étirements, méditations, etc.)  
```prisma
model Routine {
  id          Int      @id @default(autoincrement())
  slug        String   @unique
  title       String
  description String?
  duration    Int      // en minutes
  intensity   String   // ex: "low","medium","high"
  steps       Json     // séquence d’exercices
  iconUrl     String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Profile
- Profil d’onboarding ou de suivi  
```prisma
model Profile {
  id         Int      @id @default(autoincrement())
  user       User     @relation(fields: [userId], references: [id])
  userId     Int      @unique
  persona    String   // ex: "Batch Queen", "Feignante Zen"
  mood       String?  // ex: "ballonnée","fatiguée"
  createdAt  DateTime @default(now())
}
```

## Utilisation

- Après mise à jour du schéma, lancer :  
  ```bash
  npx prisma migrate dev --name init
  ```
  puis :  
  ```bash
  npx prisma generate
  ```

Ce modèle est un point de départ et pourra évoluer selon les besoins (ajout d’articles, de sessions de chat, etc.).