// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIZwcCFAC8J99T6T6k6njsdYbr7x8-QSs",
  authDomain: "roadridershub.firebaseapp.com",
  projectId: "roadridershub",
  storageBucket: "roadridershub.appspot.com",
  messagingSenderId: "273562234611",
  appId: "1:273562234611:web:dfb00221a63f8cb37f9186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;