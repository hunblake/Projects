// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjDScSFn7BT_GwwR0ixRthEVsevWKL91s",
    authDomain: "cukkmukk-80796.firebaseapp.com",
    projectId: "cukkmukk-80796",
    storageBucket: "cukkmukk-80796.appspot.com",
    messagingSenderId: "355163093488",
    appId: "1:355163093488:web:0eacea063f057f1e2c8535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)