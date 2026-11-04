"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

function AnalyticsPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = searchParams?.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;

    trackEvent("page_view", {
      page_path: fullPath,
      page_location: window.location.href,
      page_title: document.title,
    });

    const serviceParam = searchParams?.get("service");
    const docParam = searchParams?.get("doc");

    if (serviceParam) {
      trackEvent("select_service_pillar", {
        service_pillar: serviceParam,
        page_path: fullPath,
      });
    }

    if (docParam) {
      trackEvent("select_statutory_dossier", {
        dossier_type: docParam,
        page_path: fullPath,
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
