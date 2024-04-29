// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAewqp0QrcN5kBMw9_3B7hfz2zIMwsAatA",
  authDomain: "cabb-17238.firebaseapp.com",
  projectId: "cabb-17238",
  storageBucket: "cabb-17238.appspot.com",
  messagingSenderId: "131383460543",
  appId: "1:131383460543:web:f6004a9f34e8fd984fbc0a",
  measurementId: "G-M8DZCZNGWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);