
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVn4Iuh5I753wI2Ecjx-D7RgJWDNyak5U",
  authDomain: "authentication-3-3de54.firebaseapp.com",
  projectId: "authentication-3-3de54",
  storageBucket: "authentication-3-3de54.appspot.com",
  messagingSenderId: "969776544650",
  appId: "1:969776544650:web:8e7dcac2d3635c8d9b2673",
  measurementId: "G-P2MH0030QV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);