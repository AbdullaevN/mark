// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7kQTu7SxmfXmVdC3SFE72yB85KCYmOBI",
  authDomain: "projectsolo-cff22.firebaseapp.com",
  projectId: "projectsolo-cff22",
  storageBucket: "projectsolo-cff22.appspot.com",
  messagingSenderId: "902360388004",
  appId: "1:902360388004:web:7279206d751106eb557131",
};

export const app = initializeApp(firebaseConfig);
const firebaseApp = getApp();
export const storage = getStorage(firebaseApp);
export const auth = getAuth();
export const fireDB = getFirestore(app);
