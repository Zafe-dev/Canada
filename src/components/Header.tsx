"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/packs", label: "Nos packs" },
  { href: "/legal", label: "Mentions légales" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#FF0000] text-white transition-transform group-hover:scale-105">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="font-bold text-lg tracking-tight">
              Teranga<span className="text-[#FF0000]">Tech</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#FF0000] ${
                  pathname === link.href ? "text-[#FF0000]" : "text-[#111111]/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton label="WhatsApp" variant="primary" className="!py-2.5 !px-4 text-sm" />
          </nav>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-medium ${
                  pathname === link.href ? "text-[#FF0000]" : "text-[#111111]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <WhatsAppButton fullWidth label="Nous contacter" />
          </nav>
        )}
      </div>
    </header>
  );
}
