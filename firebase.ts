
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMX4DhzChAQDca-EQh64RZOJ3uaOL4LXQ",
  authDomain: "netflix-clone-c908f.firebaseapp.com",
  projectId: "netflix-clone-c908f",
  storageBucket: "netflix-clone-c908f.appspot.com",
  messagingSenderId: "908809550143",
  appId: "1:908809550143:web:e7ade5a938e9b807ec7b8a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }