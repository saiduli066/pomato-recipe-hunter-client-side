// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0RHjBSXfT6fTGxUNgq4i6MFw41M1BbRY",
  authDomain: "pomato-recipe-hunter.firebaseapp.com",
  projectId: "pomato-recipe-hunter",
  storageBucket: "pomato-recipe-hunter.appspot.com",
  messagingSenderId: "728259367257",
  appId: "1:728259367257:web:4b953437ce41a52cbe3c48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;