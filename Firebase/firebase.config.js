// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_3PEXKsF7bunOelSdTlemazFEtXtIFOg",
  authDomain: "princess-palette.firebaseapp.com",
  projectId: "princess-palette",
  storageBucket: "princess-palette.appspot.com",
  messagingSenderId: "1097949641463",
  appId: "1:1097949641463:web:1adbd53d21c9e1cfdff1f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;