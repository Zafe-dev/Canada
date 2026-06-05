import { AlertCircle } from "lucide-react";
import { ADMISSION_DISCLAIMER } from "@/lib/packs";

interface DisclaimerBannerProps {
  compact?: boolean;
}

export function DisclaimerBanner({ compact = false }: DisclaimerBannerProps) {
  return (
    <div
      className={`flex gap-3 rounded-2xl border border-red-100 bg-red-50/80 ${
        compact ? "p-4" : "p-5 md:p-6"
      }`}
      role="note"
      aria-label="Avertissement admission"
    >
      <AlertCircle
        className={`shrink-0 text-[#FF0000] ${compact ? "w-5 h-5" : "w-6 h-6"}`}
        aria-hidden
      />
      <p className={`text-[#111111] leading-relaxed ${compact ? "text-sm" : "text-sm md:text-base"}`}>
        <strong className="font-semibold">Important : </strong>
        {ADMISSION_DISCLAIMER}
      </p>
    </div>
  );
}
