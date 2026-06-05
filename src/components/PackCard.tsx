"use client";

import { Check } from "lucide-react";
import type { Pack } from "@/lib/packs";
import { WhatsAppButton } from "./WhatsAppButton";

const COLOR_STYLES = {
  green: {
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accent: "border-t-emerald-500",
  },
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "border-t-blue-500",
  },
  gold: {
    badge: "bg-amber-50 text-amber-800 border-amber-200",
    accent: "border-t-amber-500",
  },
};

interface PackCardProps {
  pack: Pack;
}

export function PackCard({ pack }: PackCardProps) {
  const styles = COLOR_STYLES[pack.color];

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${
        pack.popular ? "ring-2 ring-[#FF0000] md:scale-[1.02]" : ""
      }`}
    >
      {pack.popular && (
        <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl">
          Le plus vendu
        </div>
      )}

      <div className={`border-t-4 ${styles.accent} p-6 md:p-8 flex flex-col flex-1`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl" aria-hidden>
            {pack.emoji}
          </span>
          <span
            className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles.badge}`}
          >
            {pack.name}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-[#111111] mb-2">{pack.name}</h3>
        <p className="text-2xl md:text-3xl font-extrabold text-[#FF0000] mb-3">{pack.priceRange}</p>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{pack.description}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {pack.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-[#111111]">
              <span className="flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-[#FF0000]/10 mt-0.5">
                <Check className="w-3 h-3 text-[#FF0000]" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <WhatsAppButton
          packId={pack.id}
          label="Choisir ce pack"
          variant="card"
          fullWidth
        />
      </div>
    </article>
  );
}
