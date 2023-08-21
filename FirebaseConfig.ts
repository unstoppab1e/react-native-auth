// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWCyHNiAunjfuofmcX-ykbIC5dPfABmTM",
  authDomain: "react-native-a67b5.firebaseapp.com",
  projectId: "react-native-a67b5",
  storageBucket: "react-native-a67b5.appspot.com",
  messagingSenderId: "586511866290",
  appId: "1:586511866290:web:32176dc0556546f5916cab",
  measurementId: "G-JK3BNB1B4Z"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP)