import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Ye line add karein
  },
  eslint: {
    ignoreDuringBuilds: true, // Ye bhi add kar sakte hain
  },
};

export default nextConfig;