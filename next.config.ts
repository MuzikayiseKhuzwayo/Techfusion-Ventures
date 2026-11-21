import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/stats",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/statistics",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/benchmarks",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/study",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/calc",
        destination: "/calculator",
        permanent: true,
      },
      {
        source: "/roi",
        destination: "/calculator",
        permanent: true,
      },
      {
        source: "/roi-calculator",
        destination: "/calculator",
        permanent: true,
      },
      {
        source: "/bbbee-calculator",
        destination: "/calculator",
        permanent: true,
      },
      {
        source: "/seo-aeo-geo-forecast.html",
        destination: "/forecast",
        permanent: true,
      },
      {
        source: "/cognition",
        destination: "/architecture",
        permanent: true,
      },
      {
        source: "/stacks",
        destination: "/architecture",
        permanent: true,
      },
      {
        source: "/offer-stacks",
        destination: "/architecture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
