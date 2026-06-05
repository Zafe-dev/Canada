"use client";

import { MessageCircle } from "lucide-react";
import { redirectToWhatsApp, type PackId } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  packId?: PackId;
  label?: string;
  variant?: "primary" | "outline" | "card";
  className?: string;
  fullWidth?: boolean;
}

export function WhatsAppButton({
  packId,
  label = "Contacter sur WhatsApp",
  variant = "primary",
  className = "",
  fullWidth = false,
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 rounded-xl";

  const variants = {
    primary:
      "bg-[#FF0000] text-white px-6 py-3.5 hover:bg-[#cc0000] hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5",
    outline:
      "border-2 border-[#FF0000] text-[#FF0000] px-6 py-3.5 hover:bg-[#FF0000] hover:text-white",
    card: "bg-[#25D366] text-white px-5 py-3 hover:bg-[#1da851] hover:shadow-lg hover:-translate-y-0.5 w-full",
  };

  return (
    <button
      type="button"
      onClick={() => redirectToWhatsApp(packId)}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      <MessageCircle className="w-5 h-5" aria-hidden />
      {label}
    </button>
  );
}
