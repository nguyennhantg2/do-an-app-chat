import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBrz30_CiPRTkCybHXrvocXpP3_4xZB1lU",
  authDomain: "appchatonline-4a17e.firebaseapp.com",
  databaseURL: "https://appchatonline-4a17e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "appchatonline-4a17e",
  storageBucket: "appchatonline-4a17e.appspot.com",
  messagingSenderId: "193034700559",
  appId: "1:193034700559:web:97a9a4055b00e47e08207a",
  measurementId: "G-LB3398CPEG"
};

initializeApp(firebaseConfig);

export function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    highscore: score,
  });
}

export const firestore = getFirestore();