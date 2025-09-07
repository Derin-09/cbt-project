// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcEe113SRtAfbsvbvvmaj7o--5bohh5_U",
  authDomain: "cbt-project-5e3e3.firebaseapp.com",
  projectId: "cbt-project-5e3e3",
  storageBucket: "cbt-project-5e3e3.firebasestorage.app",
  messagingSenderId: "68540467359",
  appId: "1:68540467359:web:f0a0202da89fd040d17aaa",
  measurementId: "G-B0S89B3CMV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}