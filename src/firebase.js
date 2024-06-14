// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWeQIdg0Hp0zFI2xjLF3M_F3571adZ4Yw",
  authDomain: "netflix---clone-ca469.firebaseapp.com",
  projectId: "netflix---clone-ca469",
  storageBucket: "netflix---clone-ca469.appspot.com",
  messagingSenderId: "631461868310",
  appId: "1:631461868310:web:33431e0f0aa615363fd637",
  measurementId: "G-EGF41NYM04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;