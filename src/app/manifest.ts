import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Accompagnement CEGEP Canada`,
    short_name: SITE_NAME,
    description:
      "Service d'accompagnement pour étudiants africains souhaitant intégrer un CEGEP au Canada",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#111111",
    theme_color: "#FF0000",
    lang: "fr",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
