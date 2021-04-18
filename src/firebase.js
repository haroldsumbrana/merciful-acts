import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBDRuVZPMM0I_7eXIwK0U9vryMpaGS_WWs",
  authDomain: "auth-a387b.firebaseapp.com",
  projectId: "auth-a387b",
  storageBucket: "auth-a387b.appspot.com",
  messagingSenderId: "310653430550",
  appId: "1:310653430550:web:fa03328a998703041c3e37",
  measurementId: "G-GQ4PCNVYHX"
})

export const auth = app.auth()
export default app
