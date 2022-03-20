// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDVrePYdiQxMeWd4H-XVlVwwlmJRnnEQ0A",
    authDomain: "project-386-4850f.firebaseapp.com",
    projectId: "project-386-4850f",
    storageBucket: "project-386-4850f.appspot.com",
    messagingSenderId: "221590209875",
    appId: "1:221590209875:web:2f253586d5f810a4f1cda6",
    measurementId: "G-9F9T6F5C36"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
