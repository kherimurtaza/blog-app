// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "internship-project-d9d72.firebaseapp.com",
  projectId: "internship-project-d9d72",
  storageBucket: "internship-project-d9d72.appspot.com",
  messagingSenderId: "159111664868",
  appId: "1:159111664868:web:74d72b5a91a3b713e608f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
