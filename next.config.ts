/** @type {import('next').NextConfig} */

const isVercel = process.env.VERCEL === "1";

const nextConfig = {
  output: isVercel ? undefined : "standalone",
  basePath: isVercel ? "" : "/nexloraai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
