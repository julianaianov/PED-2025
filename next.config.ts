import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // appDir: true, // REMOVIDO pois não é mais suportado
  },
  images: {
    domains: [],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
