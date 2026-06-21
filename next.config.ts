import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/nexloraai",
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
