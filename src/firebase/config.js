// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDwrdV0DjixBJNM4dICeDhgupc29GjRyk",
  authDomain: "clone-bfb47.firebaseapp.com",
  projectId: "clone-bfb47",
  storageBucket: "clone-bfb47.appspot.com",
  messagingSenderId: "1003514502524",
  appId: "1:1003514502524:web:ff5121bc666bec7ad258f9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
