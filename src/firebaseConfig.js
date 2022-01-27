// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1XeJNRVgYB2toEujg6ikgXJN1h8MWyps",
  authDomain: "videoapp-67750.firebaseapp.com",
  projectId: "videoapp-67750",
  storageBucket: "videoapp-67750.appspot.com",
  messagingSenderId: "926874370789",
  appId: "1:926874370789:web:06614c79be8bd554cc8a0c",
  measurementId: "G-MXDTF9P571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);