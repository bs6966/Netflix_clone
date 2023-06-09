import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
//import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8owbNL_0Pa_oCoH_O0CDI0GzsSnlugi0",
  authDomain: "netflix-f1cfb.firebaseapp.com",
  projectId: "netflix-f1cfb",
  storageBucket: "netflix-f1cfb.appspot.com",
  messagingSenderId: "462115308780",
  appId: "1:462115308780:web:0478c0250166262c91d1c9",
  measurementId: "G-ZMLRH7XHLJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth }