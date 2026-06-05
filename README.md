# Teranga Tech — Accompagnement CEGEP Canada

Site web premium pour agence d'accompagnement éducatif (étudiants africains → CEGEP au Canada).

## Stack

- React + App Router
- Tailwind CSS 4
- Lucide React
- Déploiement Vercel

## Démarrage local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Configuration WhatsApp

Remplacer le numéro placeholder dans `src/lib/config.ts` :

```ts
export const WHATSAPP_NUMBER = "221XXXXXXXX"; // ex: 221771234567
```

## Pages

| Route    | Description                    |
| -------- | ------------------------------ |
| `/`      | Landing page + CTA             |
| `/packs` | 3 packs avec boutons WhatsApp  |
| `/legal` | CGU, contrat, message sécurisé |

## Déploiement Vercel

1. Pousser le repo sur GitHub
2. Importer sur [vercel.com](https://vercel.com)
3. Framework preset : détection automatique
4. `npm run build` — aucune variable d'environnement requise

Optionnel : `NEXT_PUBLIC_SITE_URL` pour les métadonnées Open Graph.

## Build

```bash
npm run build
npm start
```
