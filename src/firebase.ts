// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// (Optional) Analytics - only works in the browser
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEfOF8g6BF-E7TTL4myNdT36yn-i7-9Yg",
  authDomain: "templatehomepage-main2.firebaseapp.com",
  projectId: "templatehomepage-main2",
  storageBucket: "templatehomepage-main2.firebasestorage.app",
  messagingSenderId: "274578292681",
  appId: "1:274578292681:web:ab3fd5f6c3014faa4e3218",
  measurementId: "G-4SHQ22JR36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize analytics safely (won’t crash SSR)
isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});

// ✅ Firestore instance
const db = getFirestore(app);

export { db };