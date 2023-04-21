// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUpZD7Y0G9vBQ5CSs1RVnh1is9RSrCGNo",
    authDomain: "linkedin-clone-7ce8b.firebaseapp.com",
    projectId: "linkedin-clone-7ce8b",
    storageBucket: "linkedin-clone-7ce8b.appspot.com",
    messagingSenderId: "174659854868",
    appId: "1:174659854868:web:24f27fcf09c25b62593d01",
    measurementId: "G-DG78YYLKYH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
