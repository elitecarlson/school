import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDICWToT5SvRYWptRS8fB0i06wbULcShM0",
  authDomain: "learning-firebase-c564c.firebaseapp.com",
  projectId: "learning-firebase-c564c",
  storageBucket: "learning-firebase-c564c.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: "1:110994971055:web:fe1ca705bc6343310f775a",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app