import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { ADMISSION_DISCLAIMER } from "@/lib/packs";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Teranga Tech"
                width={148}
                height={40}
                className="h-10 w-auto rounded-lg bg-white/95 p-1.5"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agence d&apos;accompagnement pour étudiants africains souhaitant intégrer un CEGEP au
              Canada. Service professionnel, accessible et orienté résultats.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/packs" className="hover:text-white transition-colors">
                  Nos packs
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Mentions légales & contrat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF0000]" />
              Zone de service
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Accompagnement à distance pour étudiants au Sénégal et en Afrique francophone.
              Contact principal via WhatsApp.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
            {ADMISSION_DISCLAIMER}
          </p>
          <p className="text-xs text-gray-600 mt-4">
            © {new Date().getFullYear()} Teranga Tech. Service d&apos;accompagnement uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
