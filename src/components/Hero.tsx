import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#111111] text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(135deg, #FF0000 0%, transparent 50%, #FF0000 100%)`,
        }}
        aria-hidden
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF0000]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
            <MapPin className="w-4 h-4 text-[#FF0000]" />
            <span>Accompagnement CEGEP · Canada 🇨🇦</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Étudiez au Canada.
            <br />
            <span className="text-[#FF0000]">Nous vous accompagnons.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl">
            Agence spécialisée pour étudiants africains — du choix du CEGEP à la soumission de votre
            dossier. Un service premium, accessible et 100 % à distance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton label="Démarrer sur WhatsApp" />
            <Link
              href="/packs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/30 font-semibold hover:bg-white hover:text-[#111111] transition-all duration-300"
            >
              Voir nos packs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl animate-fade-in-up animate-delay-200">
          {[
            { value: "50+", label: "CEGEP au Québec" },
            { value: "100%", label: "À distance" },
            { value: "3", label: "Packs adaptés" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-[#FF0000]">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-[#FF0000] via-white to-[#FF0000]" aria-hidden />
    </section>
  );
}
