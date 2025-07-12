// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPzJS9qBEGNZra5F1ireVSB1ofiJl9sOM",
  authDomain: "sipforge-review.firebaseapp.com",
  projectId: "sipforge-review",
  storageBucket: "sipforge-review.firebasestorage.app",
  messagingSenderId: "280156015183",
  appId: "1:280156015183:web:467675c10d066abcf2783a",
  measurementId: "G-0BSQ81L3L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };