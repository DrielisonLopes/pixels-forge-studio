// @ts-nocheck
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX9wV8ueFZJsXre14X8QnxxcvYkGMMYGc",
  authDomain: "pixels-forge-studio.firebaseapp.com",
  projectId: "pixels-forge-studio",
  storageBucket: "pixels-forge-studio.appspot.com",
  messagingSenderId: "496876063255",
  appId: "1:496876063255:web:821e8588e98ec4a4c26a52",
  measurementId: "G-1M8MP31EZ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
