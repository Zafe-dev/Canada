import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  /** Masque le badge Next.js en bas à gauche en développement */
  devIndicators: false,
  /** Retire l'en-tête HTTP "X-Powered-By: Next.js" en production */
  poweredByHeader: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
