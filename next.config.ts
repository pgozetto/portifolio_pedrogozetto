import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  agentRules: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
