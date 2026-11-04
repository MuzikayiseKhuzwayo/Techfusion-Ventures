import { app } from "@/lib/firebase";

export async function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
): Promise<void> {
  if (typeof window === "undefined") return;

  try {
    const { getAnalytics, isSupported, logEvent } = await import(
      "firebase/analytics"
    );
    const supported = await isSupported();
    if (supported) {
      const analytics = getAnalytics(app);
      logEvent(analytics, eventName, eventParams);
    }
  } catch (err) {
    // Fail silently if blocked by ad-blocker or browser privacy settings
    console.debug("Analytics event skipped:", err);
  }
}
