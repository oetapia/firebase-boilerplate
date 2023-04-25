// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "REPLACE",
  authDomain: "USING",
  projectId: "INFO",
  storageBucket: "FROM",
  messagingSenderId: "FIREBASE",
  appId: "COPY",
  measurementId: "PASTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//TODO turn on analytics later
//const analytics = getAnalytics(app);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);