import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Accompagnement Études au Canada - CEGEP",
  description:
    "Service d'accompagnement pour étudiants africains souhaitant intégrer un CEGEP au Canada",
  keywords: [
    "CEGEP Canada",
    "études Canada",
    "accompagnement étudiant",
    "Sénégal",
    "admission CEGEP",
  ],
  openGraph: {
    title: "Accompagnement Études au Canada - CEGEP",
    description:
      "Service d'accompagnement pour étudiants africains souhaitant intégrer un CEGEP au Canada",
    type: "website",
    locale: "fr_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
