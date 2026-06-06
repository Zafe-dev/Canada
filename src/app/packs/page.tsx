import type { Metadata } from "next";
import { PACKS, PACKS_PRICING_NOTE } from "@/lib/packs";
import { PackCard } from "@/components/PackCard";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nos Packs - Teranga Tech",
  description:
    "Pack Starter, Standard et Premium — accompagnement accessible pour étudiants africains. Tarifs en FCFA.",
};

export default function PacksPage() {
  return (
    <>
      <section className="bg-[#f5f5f5] py-12 md:py-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#FF0000] font-semibold text-sm uppercase tracking-wider">
            Tarifs transparents
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#111111] mt-2 mb-4">
            Choisissez votre pack d&apos;accompagnement
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des formules adaptées au marché sénégalais. Cliquez sur un pack pour nous contacter
            directement sur WhatsApp avec un message pré-rempli.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {PACKS.map((pack) => (
              <PackCard key={pack.id} pack={pack} />
            ))}
          </div>

          <div className="mt-12 md:mt-16 space-y-6">
            <DisclaimerBanner />
            <p className="text-center text-sm text-gray-500 max-w-3xl mx-auto leading-relaxed">
              {PACKS_PRICING_NOTE}
            </p>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Une question avant de choisir ?</p>
            <WhatsAppButton label="Poser une question sur WhatsApp" variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
