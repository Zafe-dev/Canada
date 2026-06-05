import { CheckCircle2, Layers, Search } from "lucide-react";

const TIPS = [
  {
    icon: Search,
    title: "Choix réalistes de CEGEP",
    description:
      "Nous analysons les critères d'admission et vous orientons vers des établissements compatibles avec votre profil — pas seulement les plus connus.",
  },
  {
    icon: Layers,
    title: "Plusieurs candidatures",
    description:
      "Multiplier les candidatures (1 à 5 selon votre pack) augmente significativement vos chances d'obtenir une réponse positive.",
  },
  {
    icon: CheckCircle2,
    title: "Documents vérifiés avant envoi",
    description:
      "Traductions, relevés de notes, lettres — chaque pièce est contrôlée pour éviter les refus techniques évitables.",
  },
];

export function AntiRefusal() {
  return (
    <section className="py-16 md:py-20 bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FF0000] font-semibold text-sm uppercase tracking-wider">
            Stratégie anti-refus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Maximiser vos chances, pas les promesses
          </h2>
          <p className="text-gray-400">
            Notre approche repose sur trois piliers concrets pour réduire les refus évitables.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0000]/50 transition-colors"
            >
              <tip.icon className="w-8 h-8 text-[#FF0000] mb-4" />
              <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
