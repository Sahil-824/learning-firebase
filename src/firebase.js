
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCabYApyk7rDYLu2J_45AU2SB0ewfLImg0",
  authDomain: "learn-firebase-1142f.firebaseapp.com",
  projectId: "learn-firebase-1142f",
  storageBucket: "learn-firebase-1142f.appspot.com",
  messagingSenderId: "817414077791",
  appId: "1:817414077791:web:461332512a3a3e97cf0aea",
  databaseURL:"https://learn-firebase-1142f-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);