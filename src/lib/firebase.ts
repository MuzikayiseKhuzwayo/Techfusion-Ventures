import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAUkvhAYtbODr6sq1TsFsjDQIToLBpXN98",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "sustained-vial-361217.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "sustained-vial-361217",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "sustained-vial-361217.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "362229741437",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:362229741437:web:5c8486b9018e1da3c8be14",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-M62BEQ8K2K"
};

// Initialize Firebase app (safely check to prevent re-initialization during development hot-reloading)
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
