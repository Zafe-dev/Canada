import { BookOpen, ClipboardList, Send } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: BookOpen,
    step: "01",
    title: "Évaluation de votre profil",
    description: "Analyse de votre parcours scolaire et définition d'une stratégie réaliste.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Préparation du dossier",
    description: "Sélection des CEGEP, rédaction et vérification de tous vos documents.",
  },
  {
    icon: Send,
    step: "03",
    title: "Soumission & suivi",
    description: "Envoi des candidatures et accompagnement jusqu'à la réponse des établissements.",
  },
];

export function ServiceSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-[#FF0000] font-semibold text-sm uppercase tracking-wider">
              Notre service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mt-2 mb-6">
              Accompagnement complet pour votre admission CEGEP
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nous ne sommes pas une école ni un établissement canadien. Nous sommes une agence
              d&apos;accompagnement qui vous aide à présenter le meilleur dossier possible auprès
              des CEGEP du Québec — en français, avec un suivi humain et personnalisé.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Que vous soyez au Sénégal, en Côte d&apos;Ivoire ou ailleurs en Afrique francophone,
              tout se fait à distance. Contactez-nous sur WhatsApp pour commencer.
            </p>
            <Link
              href="/packs"
              className="inline-flex items-center gap-2 text-[#FF0000] font-semibold hover:gap-3 transition-all"
            >
              Découvrir nos packs tarifaires
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="space-y-4">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-5 md:p-6 rounded-2xl bg-[#f5f5f5] border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="shrink-0 w-14 h-14 rounded-xl bg-[#FF0000] text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-4 h-4 text-[#FF0000]" />
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
