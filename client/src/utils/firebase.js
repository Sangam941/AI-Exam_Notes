import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "authaiexamnotes-ccd1d.firebaseapp.com",
  projectId: "authaiexamnotes-ccd1d",
  storageBucket: "authaiexamnotes-ccd1d.firebasestorage.app",
  messagingSenderId: "407907012272",
  appId: "1:407907012272:web:05a91f7ba56ad19c96b575"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({prompt:"select_account"})

export {auth, provider}