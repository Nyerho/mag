// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAakJPhinsbAWpKzBK6hBH3R9dE62zmFdA",
  authDomain: "enitariere-321c9.firebaseapp.com",
  projectId: "enitariere-321c9",
  storageBucket: "enitariere-321c9.firebasestorage.app",
  messagingSenderId: "189192974570",
  appId: "1:189192974570:web:4dd203a880646f86b3a793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
