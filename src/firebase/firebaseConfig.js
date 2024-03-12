import { initializeApp } from "firebase/app";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAwwGzWTEl5nM1O080xp3AXJRnuAx-uQq0",
  authDomain: "socialnetwork-9f201.firebaseapp.com",
  projectId: "socialnetwork-9f201",
  storageBucket: "socialnetwork-9f201.appspot.com",
  messagingSenderId: "685166908146",
  appId: "1:685166908146:web:0815cf186bef3c9c3af66b",
  measurementId: "G-KFLYPM3PEV",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore();
const provider = new FacebookAuthProvider();
const google_provider = new GoogleAuthProvider();
export { provider, google_provider, db };
