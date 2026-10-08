import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
