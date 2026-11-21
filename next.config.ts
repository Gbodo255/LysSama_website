import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  // Agents parallèles : chaque serveur de dev a son dossier (NEXT_DIST_DIR=.next-<id>) — docs/AGENTS-RULES.md.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  devIndicators: false,
  allowedDevOrigins: ['127.0.0.1'], // banc : le clone est mesuré sur http://127.0.0.1:<port>
};

export default config;
