import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://techfusion-ventures.xyz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "Google-Extended",
          "Applebot-Extended",
          "Twitterbot",
          "facebookexternalhit",
          "Discordbot",
          "TelegramBot",
          "Cohere-ai",
          "Amazonbot",
        ],
        allow: [
          "/",
          "/research",
          "/calculator",
          "/contact",
          "/forecast",
          "/llms.txt",
          "/llms-full.txt",
        ],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
