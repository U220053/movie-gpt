// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6eSDR72rLawDO32_i7_DACxkwCFQCMEk",
  authDomain: "netflix-gpt-82512.firebaseapp.com",
  projectId: "netflix-gpt-82512",
  storageBucket: "netflix-gpt-82512.appspot.com",
  messagingSenderId: "293332655672",
  appId: "1:293332655672:web:873672a1d58b99f0ac10cd",
  measurementId: "G-X4HGYLPC57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
