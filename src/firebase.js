import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRT6p6wd-52Qr84hoWLTA6radPjdx24N8",
  authDomain: "react-blog-app-50a00.firebaseapp.com",
  projectId: "react-blog-app-50a00",
  storageBucket: "react-blog-app-50a00.appspot.com",
  messagingSenderId: "154456679044",
  appId: "1:154456679044:web:693bd4f512bcbd46e658d1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
