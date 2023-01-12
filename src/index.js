import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrMm0Iu8cqc0_70amPD53iqsFYsAzQy0s",
  authDomain: "tiendahieloyfuego.firebaseapp.com",
  projectId: "tiendahieloyfuego",
  storageBucket: "tiendahieloyfuego.appspot.com",
  messagingSenderId: "772505241390",
  appId: "1:772505241390:web:d03ac98aa38088462a9cbf",
  measurementId: "G-1ZBC5LK2G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);