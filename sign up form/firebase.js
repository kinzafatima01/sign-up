// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 
"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMZDC5TqzvEJ1RAA7Yo-ydEsVgYY0lk44",
  authDomain: "from-16ec6.firebaseapp.com",
  projectId: "from-16ec6",
  storageBucket: "from-16ec6.firebasestorage.app",
  messagingSenderId: "509175578645",
  appId: "1:509175578645:web:e100907e8fa5ccd9af4e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

import firebase from "firebase/app";
import "firebase/auth";

const provider = new firebase.auth.GoogleAuthProvider();
//   export {auth ,db, GoogleAuthProvider }