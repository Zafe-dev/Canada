import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_NAME } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: "Accompagnement Études au Canada - Teranga Tech",
  description:
    "Service d'accompagnement pour étudiants africains souhaitant intégrer un CEGEP au Canada",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "CEGEP Canada",
    "études Canada",
    "accompagnement étudiant",
    "Sénégal",
    "admission CEGEP",
  ],
  openGraph: {
    title: "Accompagnement Études au Canada - Teranga Tech",
    description:
      "Service d'accompagnement pour étudiants africains souhaitant intégrer un CEGEP au Canada",
    type: "website",
    locale: "fr_CA",
    siteName: SITE_NAME,
  },
};

export const viewport: Viewport = {
  themeColor: "#FF0000",
  width: "device-width",
  initialScale: 1,
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
