"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

export function classifyTrafficBucket(
  referrer: string,
  utmSource: string
): {
  channel_bucket: string;
  traffic_origin: string;
} {
  const ref = (referrer || "").toLowerCase();
  const utm = (utmSource || "").toLowerCase();
  const combined = `${ref} ${utm}`;

  const aiDomains = [
    "chatgpt.com",
    "openai.com",
    "perplexity.ai",
    "claude.ai",
    "gemini.google.com",
    "copilot.microsoft.com",
    "you.com",
    "phind.com",
  ];
  for (const domain of aiDomains) {
    if (combined.includes(domain)) {
      return {
        channel_bucket: "ai_answer_engine_geo_aeo",
        traffic_origin: domain,
      };
    }
  }

  const searchDomains = [
    "google.",
    "bing.com",
    "duckduckgo.com",
    "brave.com",
    "search.yahoo.com",
  ];
  for (const domain of searchDomains) {
    if (combined.includes(domain)) {
      return {
        channel_bucket: "organic_search_seo",
        traffic_origin: domain.replace(/\.$/, ""),
      };
    }
  }

  const socialDomains = [
    "linkedin.com",
    "lnkd.in",
    "t.co",
    "twitter.com",
    "x.com",
    "facebook.com",
    "instagram.com",
    "youtube.com",
  ];
  for (const domain of socialDomains) {
    if (combined.includes(domain)) {
      return {
        channel_bucket: "social_and_video",
        traffic_origin: domain,
      };
    }
  }

  if (combined.includes("techfusion-alchemy.xyz")) {
    return {
      channel_bucket: "partner_affiliate_division",
      traffic_origin: "techfusion-alchemy.xyz",
    };
  }

  if (!ref && !utm) {
    return {
      channel_bucket: "direct",
      traffic_origin: "direct",
    };
  }

  return {
    channel_bucket: "referral_other",
    traffic_origin: utm || ref.slice(0, 80),
  };
}

function AnalyticsPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasLoggedLanding = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = searchParams?.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;
    const utmSource = searchParams?.get("utm_source") || "";
    const utmMedium = searchParams?.get("utm_medium") || "";
    const utmCampaign = searchParams?.get("utm_campaign") || "";

    const { channel_bucket, traffic_origin } = classifyTrafficBucket(
      document.referrer || "",
      utmSource
    );

    if (!hasLoggedLanding.current) {
      hasLoggedLanding.current = true;
      trackEvent("landing_view", {
        page_path: fullPath,
        channel_bucket,
        traffic_origin,
        utm_source: utmSource || "none",
        utm_medium: utmMedium || "none",
        utm_campaign: utmCampaign || "none",
      });
    }

    trackEvent("page_view", {
      page_path: fullPath,
      page_location: window.location.href,
      page_title: document.title,
      channel_bucket,
    });

    const serviceParam = searchParams?.get("service");
    const docParam = searchParams?.get("doc");

    if (serviceParam) {
      trackEvent("select_service_pillar", {
        service_pillar: serviceParam,
        page_path: fullPath,
        channel_bucket,
      });
    }

    if (docParam) {
      trackEvent("select_statutory_dossier", {
        dossier_type: docParam,
        page_path: fullPath,
        channel_bucket,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export default function FirebaseAnalytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsPageTracker />
    </Suspense>
  );
}
