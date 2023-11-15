
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpYbEo0pGz9Nxl0_1HJfex91VIHvW_ms0",
  authDomain: "authentication-trial2.firebaseapp.com",
  projectId: "authentication-trial2",
  storageBucket: "authentication-trial2.appspot.com",
  messagingSenderId: "610407552838",
  appId: "1:610407552838:web:22d0a8046377964a5c7747",
  measurementId: "G-MPD03M0MG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);