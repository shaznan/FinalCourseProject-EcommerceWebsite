import firebase from "firebase/app";
import "firebase/firestore"; //Database
import "firebase/auth"; //Authenthication

const config = {
  apiKey: "AIzaSyBMjfFBtF_yCV2P4R1btkHP71gRoFCyWL4",
  authDomain: "crown-database-cb295.firebaseapp.com",
  databaseURL: "https://crown-database-cb295-default-rtdb.firebaseio.com",
  projectId: "crown-database-cb295",
  storageBucket: "crown-database-cb295.appspot.com",
  messagingSenderId: "616943003654",
  appId: "1:616943003654:web:d0c24e6871a04dbb747b87",
  measurementId: "G-MJS8X7EZCH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //method in firebase auth for google sign in
provider.setCustomParameters({ promt: "select_account" }); //google popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
