// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9LZfFGHuLwB-1PxRaJkaoHAOeZerqGkY",
  authDomain: "react-dragon-news-auth-7b0a3.firebaseapp.com",
  projectId: "react-dragon-news-auth-7b0a3",
  storageBucket: "react-dragon-news-auth-7b0a3.appspot.com",
  messagingSenderId: "215531827492",
  appId: "1:215531827492:web:c5d2028f9af60d187a83b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth