import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },

  // ✅ Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
