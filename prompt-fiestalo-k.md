# Prompt — Site vitrine Fiestalo k

> **Consigne générale** : Sois économe en tokens. Génère du code dense et sans commentaires superflus. Pas de blabla entre les fichiers, enchaîne directement.

---

## Contexte

Tu es un expert en développement web fullstack, SEO local, et UI/UX design haut de gamme.

Crée un site vitrine pour **Fiestalo k** (jeu de mots sur "fiesta loca"), entreprise alsacienne de location de matériel festif :

- 4 châteaux gonflables
- Tonnelles
- Photobooths
- Machine à popcorn

Basée à **Strasbourg**, mobile sur toute l'**Alsace**.

---

## Stack technique

- **Vue 3** — Composition API, `<script setup>`
- **Tailwind CSS v3**
- Composants atomiques réutilisables et maintenables
- Données produits externalisées dans `src/data/products.js`
- Pas de backend requis

---

## SEO local (priorité haute)

- Balises `<title>` et `<meta description>` ciblant :
  - *location château gonflable Strasbourg*
  - *location château gonflable Alsace*
  - *animation fête Strasbourg*
  - *photobooth mariage Alsace*
- Balisage sémantique HTML5 (`<main>`, `<article>`, `<section>`)
- Données structurées **JSON-LD** : type `LocalBusiness`, adresse Strasbourg, zone de service Alsace
- Textes des sections naturellement optimisés pour ces mots-clés (sans sur-optimisation)
- `alt` text descriptifs sur toutes les images

---

## Design

- **Palette** : blanc cassé + noir profond + 1 couleur accent festive (corail chaud ou jaune doré)
- **Typographie** : 1 font display (ex. Playfair Display) + 1 sans-serif clean (Inter)
- **Ambiance** : haut de gamme, chaleureux, local et de confiance — pas enfantin malgré les gonflables
- Animations légères au scroll via `IntersectionObserver` natif (pas de lib externe)
- 100% responsive, approche **mobile-first**

---

## Structure de la SPA

| # | Section | Contenu clé |
|---|---------|-------------|
| 1 | **Hero** | Accroche forte, CTA "Demander un devis", visuel impactant |
| 2 | **À propos** | Expertise locale, adaptabilité, ton humain et professionnel |
| 3 | **Catalogue** | Cards produits (photo, nom, description courte, badge catégorie) |
| 4 | **Pourquoi nous** | 3-4 arguments : livraison Alsace, montage inclus, qualité, réactivité |
| 5 | **Zone d'intervention** | Liste des secteurs (Strasbourg, Bas-Rhin, Haut-Rhin…) |
| 6 | **Contact / Devis** | Formulaire : nom, date, article souhaité, message |
| 7 | **Footer** | Liens, mentions légales, réseaux sociaux |

---

## Contraintes qualité code

- Composants atomiques : `BaseButton`, `ProductCard`, `SectionWrapper`
- Props typées
- Aucune logique métier dans le template
- Commentaires uniquement si la logique est non évidente
- CSS custom uniquement si Tailwind ne suffit pas

---

## Ordre de génération

Génère d'abord l'**arborescence complète du projet**, puis les fichiers dans cet ordre :

1. `index.html`
2. `App.vue`
3. Composants (`/components`)
4. `src/data/products.js`
