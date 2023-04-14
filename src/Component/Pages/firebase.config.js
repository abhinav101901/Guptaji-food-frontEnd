// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuJhqNab97QS_nGCt7UiEitfftIk2GNqw",
  authDomain: "my-first-40869.firebaseapp.com",
  projectId: "my-first-40869",
  storageBucket: "my-first-40869.appspot.com",
  messagingSenderId: "992842556474",
  appId: "1:992842556474:web:582dafe6e6e89811de0103",
  measurementId: "G-9WMV9ZEZJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
