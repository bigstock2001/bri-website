import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Not recommended long-term, but leaving this since you already use it
  // and it keeps the build from failing on TS issues.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
