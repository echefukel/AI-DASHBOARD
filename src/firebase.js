// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALIr__hJ9V3zciBUU2UKF5IF95Cm4ZetI",
  authDomain: "ai-dashboard-caf29.firebaseapp.com",
  projectId: "ai-dashboard-caf29",
  storageBucket: "ai-dashboard-caf29.firebasestorage.app",
  messagingSenderId: "440160101697",
  appId: "1:440160101697:web:4e30a5b7d4d07580a2adc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
