// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5anSAsioJbNfq9UbHQ-P518iYfyGPXXw",
  authDomain: "dinodev-e022f.firebaseapp.com",
  projectId: "dinodev-e022f",
  storageBucket: "dinodev-e022f.firebasestorage.app",
  messagingSenderId: "984787048298",
  appId: "1:984787048298:web:35fd7fdad5488a19933713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
