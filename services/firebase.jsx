// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEFKCjlMTIZUoHwzc9qGqU7k4s0RgWklo",
    authDomain: "ac-inw.firebaseapp.com",
    projectId: "ac-inw",
    storageBucket: "ac-inw.appspot.com",
    messagingSenderId: "469757108494",
    appId: "1:469757108494:web:29616bebef12e54648775f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)