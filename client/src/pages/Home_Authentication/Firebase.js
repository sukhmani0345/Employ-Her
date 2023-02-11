import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAUnep_ZfG7Un9i8QvH7QbN0BncQ5d2Xfc",
  authDomain: "employher-6a9cc.firebaseapp.com",
  projectId: "employher-6a9cc",
  storageBucke: "employher-6a9cc.appspot.com",
  messagingSenderId: "18908605232",
  appId: "1:18908605232:web:62b4deeaef3ebef5e8f6f5",
  databaseURL: "https://employher-6a9cc-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};