import type { Metadata } from "next";
import { DisclaimerBanner } from "@/components/DisclaimerBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mentions légales & Contrat - CEGEP Canada",
  description:
    "Conditions générales, contrat client et informations légales sur notre service d'accompagnement CEGEP.",
};

export default function LegalPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">
          Mentions légales & contrat client
        </h1>
        <p className="text-gray-600 mb-8">
          Informations importantes concernant notre service d&apos;accompagnement éducatif.
        </p>

        <DisclaimerBanner compact />

        <article className="prose prose-gray max-w-none mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-4">Conditions générales</h2>
            <ul className="space-y-3 text-gray-700 text-sm leading-relaxed list-none p-0">
              <li className="pl-4 border-l-2 border-[#FF0000]">
                <strong>Nature du service :</strong> CanadaÉducation fournit un service
                d&apos;accompagnement éducatif (conseil, préparation de dossier, suivi). Nous ne
                sommes pas un établissement d&apos;enseignement canadien ni un organisme
                d&apos;immigration.
              </li>
              <li className="pl-4 border-l-2 border-[#FF0000]">
                <strong>Pas de garantie d&apos;admission :</strong> L&apos;admission dans les CEGEP
                dépend exclusivement des établissements canadiens. Nous optimisons votre dossier
                mais ne pouvons garantir une acceptation.
              </li>
              <li className="pl-4 border-l-2 border-[#FF0000]">
                <strong>Paiement :</strong> Les tarifs indiqués sont des fourchettes selon la
                complexité du dossier. Le montant exact est confirmé par WhatsApp avant démarrage.
              </li>
              <li className="pl-4 border-l-2 border-[#FF0000]">
                <strong>Communication :</strong> Le canal principal de suivi est WhatsApp. Le
                client s&apos;engage à fournir des informations exactes et des documents authentiques.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111111] mb-4">Contrat client simplifié</h2>
            <div className="bg-[#f5f5f5] rounded-2xl p-6 md:p-8 space-y-4 text-sm text-gray-700">
              <p>
                <strong>1. Objet :</strong> Le prestataire s&apos;engage à accompagner l&apos;étudiant
                dans sa démarche de candidature auprès de CEGEP au Québec, selon le pack choisi.
              </p>
              <p>
                <strong>2. Pas de remboursement après début :</strong> Une fois le service démarré
                (première analyse de dossier ou première action concrète), aucun remboursement
                n&apos;est accordé, sauf accord écrit exceptionnel du prestataire.
              </p>
              <p>
                <strong>3. Service d&apos;accompagnement uniquement :</strong> Le prestataire ne
                garantit ni l&apos;admission, ni un visa, ni un permis d&apos;études. Ces décisions
                relèvent des autorités et établissements compétents.
              </p>
              <p>
                <strong>4. Responsabilités de l&apos;étudiant :</strong> L&apos;étudiant doit :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fournir des documents authentiques et complets dans les délais convenus</li>
                <li>Répondre aux demandes du prestataire en temps utile</li>
                <li>Respecter les dates limites des CEGEP choisis</li>
                <li>Assumer les frais officiels des établissements (inscription, tests, etc.)</li>
                <li>Prendre les décisions finales concernant les établissements ciblés</li>
              </ul>
              <p>
                <strong>5. Acceptation :</strong> Le paiement ou le démarrage explicite du service
                via WhatsApp vaut acceptation de ces conditions.
              </p>
            </div>
          </section>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <WhatsAppButton label="Nous contacter sur WhatsApp" />
        </div>
      </div>
    </div>
  );
}
