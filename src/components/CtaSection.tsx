import Link from "next/link";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#FF0000] text-white p-8 md:p-12 lg:p-16 overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à commencer votre aventure au Canada ?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Choisissez votre pack ou contactez-nous directement. Réponse rapide sur WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton label="Écrire sur WhatsApp" className="!bg-white !text-[#FF0000] hover:!bg-gray-100" />
              <Link
                href="/packs"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-white font-semibold hover:bg-white/10 transition-colors"
              >
                Comparer les packs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
