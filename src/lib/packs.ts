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
    id: "starter",
    name: "Pack Starter",
    emoji: "🟢",
    priceRange: "30 000 – 60 000 FCFA",
    description: "Idéal pour démarrer votre projet d'études au Canada avec un budget accessible.",
    features: [
      "Aide au choix du CEGEP",
      "Création du dossier de candidature",
      "Vérification des documents",
      "1 à 3 candidatures",
    ],
    color: "green",
  },
  {
    id: "standard",
    name: "Pack Standard",
    emoji: "🔵",
    priceRange: "80 000 – 150 000 FCFA",
    description: "Notre formule la plus demandée — accompagnement complet et suivi personnalisé.",
    features: [
      "Tout le Pack Starter",
      "Jusqu'à 5 CEGEP ciblés",
      "Rédaction lettre de motivation",
      "Suivi WhatsApp dédié",
    ],
    popular: true,
    color: "blue",
  },
  {
    id: "premium",
    name: "Pack Premium",
    emoji: "👑",
    priceRange: "150 000 – 300 000 FCFA",
    description: "Accompagnement premium jusqu'à l'admission — stratégie sur mesure.",
    features: [
      "Accompagnement complet",
      "Stratégie personnalisée",
      "Suivi jusqu'à admission",
      "Optimisation maximale du dossier",
    ],
    color: "gold",
  },
];

export const ADMISSION_DISCLAIMER =
  "L'admission dans les CEGEP dépend exclusivement des établissements canadiens. Nous ne garantissons pas l'admission, mais nous optimisons votre dossier pour maximiser vos chances.";
