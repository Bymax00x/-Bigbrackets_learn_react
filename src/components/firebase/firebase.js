import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA_bsXFd8mlgKGTsO0YGkOYRHQmjNMHSQw",
//   authDomain: "e-learning-11033.firebaseapp.com",
//   projectId: "e-learning-11033",
//   storageBucket: "e-learning-11033.appspot.com",
//   messagingSenderId: "1058110976519",
//   appId: "1:1058110976519:web:f948b4e62f1d6515ab30a2",
//   measurementId: "G-NPMBVR4NL8",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBXjn6WlPuqLZXqP2RKumrk_KZ3YON6liM",
  authDomain: "backup-elearning-6301d.firebaseapp.com",
  projectId: "backup-elearning-6301d",
  storageBucket: "backup-elearning-6301d.appspot.com",
  messagingSenderId: "146915741713",
  appId: "1:146915741713:web:dd8d65e5cb7c9995b6e1b0",
  measurementId: "G-6KETVP5FPX",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default db;
