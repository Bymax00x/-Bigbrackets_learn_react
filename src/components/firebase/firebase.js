import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_bsXFd8mlgKGTsO0YGkOYRHQmjNMHSQw",
  authDomain: "e-learning-11033.firebaseapp.com",
  projectId: "e-learning-11033",
  storageBucket: "e-learning-11033.appspot.com",
  messagingSenderId: "1058110976519",
  appId: "1:1058110976519:web:f948b4e62f1d6515ab30a2",
  measurementId: "G-NPMBVR4NL8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;
