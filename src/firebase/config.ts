import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "-",
  authDomain: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Areas who contain '-' will be filled by the script you have taken from firebase while configuring a database.
