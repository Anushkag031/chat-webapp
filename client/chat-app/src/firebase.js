// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVLoCnEqR3gy8xbLuLrdrgQ-fV0Y8tmUQ",
    authDomain: "chat-app-b51ed.firebaseapp.com",
    projectId: "chat-app-b51ed",
    storageBucket: "chat-app-b51ed.appspot.com",
    messagingSenderId: "460083463754",
    appId: "1:460083463754:web:2089cfa4f098adb4d7c8b3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();