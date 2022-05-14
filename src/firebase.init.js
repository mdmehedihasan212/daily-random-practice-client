// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNrf0R9J42HeWTi02bL9ahCD_8ClZinCA",
    authDomain: "daily-random-practice.firebaseapp.com",
    projectId: "daily-random-practice",
    storageBucket: "daily-random-practice.appspot.com",
    messagingSenderId: "365775731099",
    appId: "1:365775731099:web:216aa12522d239d119093e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;