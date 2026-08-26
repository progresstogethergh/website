import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.113"],
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/website",
};

export default nextConfig;
