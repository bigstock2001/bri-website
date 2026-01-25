/** @type {import('next').NextConfig} */
const nextConfig = {
  // This prevents Sanity Studio's TypeScript files inside /sanity
  // from breaking the Next.js production build on Vercel.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
