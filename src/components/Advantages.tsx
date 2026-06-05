import {
  FileCheck,
  Globe2,
  MessageSquare,
  Shield,
  Target,
  Users,
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: Target,
    title: "CEGEP adaptés à votre profil",
    description:
      "Nous vous orientons vers des établissements réalistes selon votre niveau, vos notes et vos objectifs.",
  },
  {
    icon: FileCheck,
    title: "Dossier optimisé",
    description:
      "Vérification complète de vos documents avant soumission pour éviter les refus évitables.",
  },
  {
    icon: MessageSquare,
    title: "Suivi WhatsApp",
    description:
      "Communication directe, réactive et professionnelle — comme une vraie agence internationale.",
  },
  {
    icon: Globe2,
    title: "Expertise Canada",
    description:
      "Connaissance du système québécois, des délais et des exigences des CEGEP francophones.",
  },
  {
    icon: Shield,
    title: "Transparence totale",
    description:
      "Pas de fausses promesses. Service d'accompagnement clair, avec clause légale visible.",
  },
  {
    icon: Users,
    title: "Prix accessibles",
    description:
      "Formules pensées pour le marché sénégalais — qualité premium sans prix prohibitif.",
  },
];

export function Advantages() {
  return (
    <section className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#FF0000] font-semibold text-sm uppercase tracking-wider">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-2 mb-4">
            Une agence qui comprend votre parcours
          </h2>
          <p className="text-gray-600">
            De Dakar à Montréal — nous simplifions chaque étape de votre candidature CEGEP.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ADVANTAGES.map((item, i) => (
            <div
              key={item.title}
              className="group p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#FF0000]/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF0000] transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#FF0000] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
