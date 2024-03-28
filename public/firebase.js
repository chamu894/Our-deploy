// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRJ1jF47WjgWcjAYGkP5YGdfVAuUsAsW0",
  authDomain: "automated-lore-417801.firebaseapp.com",
  projectId: "automated-lore-417801",
  storageBucket: "automated-lore-417801.appspot.com",
  messagingSenderId: "666791845737",
  appId: "1:666791845737:web:67f7b62aa681c21a6c27f8",
  measurementId: "G-4NNRWHLCQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);