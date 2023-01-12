import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBrMm0Iu8cqc0_70amPD53iqsFYsAzQy0s",
    authDomain: "tiendahieloyfuego.firebaseapp.com",
    projectId: "tiendahieloyfuego",
    storageBucket: "tiendahieloyfuego.appspot.com",
    messagingSenderId: "772505241390",
    appId: "1:772505241390:web:d03ac98aa38088462a9cbf",
    measurementId: "G-1ZBC5LK2G4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;