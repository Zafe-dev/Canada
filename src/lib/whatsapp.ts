import { WHATSAPP_NUMBER } from "./config";

export type PackId = "starter" | "standard" | "premium";

const PACK_MESSAGES: Record<PackId, string> = {
  starter:
    "Bonjour, je souhaite être accompagné pour le Pack Starter CEGEP Canada. Merci de me préciser les prochaines étapes.",
  standard:
    "Bonjour, je souhaite être accompagné pour le Pack Standard CEGEP Canada. Merci de me préciser les prochaines étapes.",
  premium:
    "Bonjour, je souhaite être accompagné pour le Pack Premium CEGEP Canada. Merci de me préciser les prochaines étapes.",
};

export function getWhatsAppUrl(packId?: PackId, customMessage?: string): string {
  const text = encodeURIComponent(
    customMessage ?? (packId ? PACK_MESSAGES[packId] : getDefaultContactMessage())
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function redirectToWhatsApp(packId?: PackId, customMessage?: string): void {
  if (typeof window !== "undefined") {
    window.location.href = getWhatsAppUrl(packId, customMessage);
  }
}

export function getDefaultContactMessage(): string {
  return "Bonjour, je souhaite des informations sur l'accompagnement pour intégrer un CEGEP au Canada. Merci.";
}
