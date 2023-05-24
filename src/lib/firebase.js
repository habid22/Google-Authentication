
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3gYCv2Vng75v0QsvAkwDZRPQnuWEPCes",
  authDomain: "authentication-page-309dd.firebaseapp.com",
  projectId: "authentication-page-309dd",
  storageBucket: "authentication-page-309dd.appspot.com",
  messagingSenderId: "388022773014",
  appId: "1:388022773014:web:9ebcac77a699b0a6a51c37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);