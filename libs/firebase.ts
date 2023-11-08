import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-65ba8.firebaseapp.com",
  projectId: "blog-65ba8",
  storageBucket: "blog-65ba8.appspot.com",
  messagingSenderId: "185880362552",
  appId: "1:185880362552:web:4929c6c41f23dce45770cd",
};

export const app = initializeApp(firebaseConfig);
