import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6mj3zpNgKBvKK4PpCLYbAKpt4yhXYCZ4",
  authDomain: "sakura-petshop-7469a.firebaseapp.com",
  projectId: "sakura-petshop-7469a",
  storageBucket: "sakura-petshop-7469a.appspot.com",
  messagingSenderId: "246619590943",
  appId: "1:246619590943:web:2b5e3eb4d8f03c265f202a",
  measurementId: "G-M5HWF1DJFQ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
