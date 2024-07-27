// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyCn5B2QdXaE8ObW40AwA9Pr1ltJ8o_YVXM",
  authDomain: "siembratech-457cf.firebaseapp.com",
  projectId: "siembratech-457cf",
  storageBucket: "siembratech-457cf.appspot.com",
  messagingSenderId: "238756880727",
  appId: "1:238756880727:web:5d04b4d25909ad9f6ade12"
};


// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}