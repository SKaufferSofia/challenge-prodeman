import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: [
      "mibucket-personal-sofia.s3.us-east-1.amazonaws.com",
      "i.annihil.us",
    ],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "mibucket-personal-sofia.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "i.annihil.us",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
