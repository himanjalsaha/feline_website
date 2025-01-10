import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'], // Replace with your Firebase storage domain
  },
};

export default nextConfig;
