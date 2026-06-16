"use client";

import { useEffect } from "react";
import { app } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    // Only run on the client side
    if (typeof window !== "undefined") {
      // Dynamic import to prevent bundler problems during SSR
      import("firebase/analytics").then(({ getAnalytics, isSupported }) => {
        isSupported().then((supported) => {
          if (supported) {
            getAnalytics(app);
          }
        });
      });
    }
  }, []);

  return null;
}
