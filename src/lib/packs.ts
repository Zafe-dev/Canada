import type { PackId } from "./whatsapp";

export interface Pack {
  id: PackId;
  name: string;
  emoji: string;
  priceRange: string;
  description: string;
  features: string[];
  popular?: boolean;
  color: "green" | "blue" | "gold";
}

export const PACKS: Pack[] = [
  {
    id: "essentiel",
    name: "Pack Essentiel",
    emoji: "🟢",
    priceRange: "79 000 – 129 000 FCFA",
    description:
      "L'essentiel pour structurer votre projet d'études au Canada avec un accompagnement professionnel.",
    features: [
      "Analyse complète du profil",
      "Choix stratégique du programme",
      "Sélection du meilleur cégep",
      "Vérification des documents",
      "Création du dossier d'admission",
      "Conseils personnalisés",
    ],
    color: "green",
  },
  {
    id: "premium",
    name: "Pack Premium",
    emoji: "⭐",
    priceRange: "199 000 – 299 000 FCFA",
    description:
      "Notre formule la plus demandée — accompagnement renforcé jusqu'à la décision d'admission.",
    features: [
      "Tout le Pack Essentiel",
      "Optimisation du dossier",
      "Lettre de motivation professionnelle",
      "Préparation au test de français",
      "Assistance pour les documents financiers",
      "Support WhatsApp prioritaire",
      "Suivi complet jusqu'à la décision d'admission",
    ],
    popular: true,
    color: "blue",
  },
  {
    id: "vip",
    name: "Pack VIP",
    emoji: "👑",
    priceRange: "399 000 – 699 000 FCFA",
    description:
      "Accompagnement haut de gamme avec conseiller dédié jusqu'aux autorisations d'études.",
    features: [
      "Tout le Pack Premium",
      "Stratégie d'admission personnalisée",
      "Préparation CAQ",
      "Préparation permis d'études",
      "Révision complète des formulaires",
      "Coaching entretien (si nécessaire)",
      "Conseiller dédié",
      "Accompagnement jusqu'à l'obtention des autorisations d'études",
    ],
    color: "gold",
  },
];

export const ADMISSION_DISCLAIMER =
  "L'admission dans les CEGEP dépend exclusivement des établissements canadiens. Nous ne garantissons pas l'admission, mais nous optimisons votre dossier pour maximiser vos chances.";

export const PACKS_PRICING_NOTE =
  "Les agences d'accompagnement aux études à l'étranger proposent souvent des forfaits allant de quelques centaines à plusieurs milliers d'euros ou dollars selon le niveau de service et le suivi personnalisé.";
