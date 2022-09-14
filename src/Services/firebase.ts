import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "auth-e4166.firebaseapp.com",
  projectId: "auth-e4166",
  storageBucket: "auth-e4166.appspot.com",
  messagingSenderId: "373959902689",
  appId: "1:373959902689:web:fc1bc537632029d0c17ea0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);