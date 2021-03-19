import firebase from "firebase";

//first
// const firebaseConfig = {
//   apiKey: "AIzaSyA_bsXFd8mlgKGTsO0YGkOYRHQmjNMHSQw",
//   authDomain: "e-learning-11033.firebaseapp.com",
//   projectId: "e-learning-11033",
//   storageBucket: "e-learning-11033.appspot.com",
//   messagingSenderId: "1058110976519",
//   appId: "1:1058110976519:web:f948b4e62f1d6515ab30a2",
//   measurementId: "G-NPMBVR4NL8",
// };

//second
// const firebaseConfig = {
//   apiKey: "AIzaSyBXjn6WlPuqLZXqP2RKumrk_KZ3YON6liM",
//   authDomain: "backup-elearning-6301d.firebaseapp.com",
//   projectId: "backup-elearning-6301d",
//   storageBucket: "backup-elearning-6301d.appspot.com",
//   messagingSenderId: "146915741713",
//   appId: "1:146915741713:web:dd8d65e5cb7c9995b6e1b0",
//   measurementId: "G-6KETVP5FPX",
// };

//third
// const firebaseConfig = {
//   apiKey: "AIzaSyDcLlBaL8z3zlns_As_aiDNDoAzqZxDowo",
//   authDomain: "backup01-elearning.firebaseapp.com",
//   projectId: "backup01-elearning",
//   storageBucket: "backup01-elearning.appspot.com",
//   messagingSenderId: "1031173759453",
//   appId: "1:1031173759453:web:2be08688e775d411085634",
//   measurementId: "G-HKN4W2XNSN",
// };

//demo database

const firebaseConfig = {
  apiKey: "AIzaSyB6XZNutrfk-GfJP5Wpfua91VYSqTmsBEg",
  authDomain: "e-learning-demo-ff98b.firebaseapp.com",
  projectId: "e-learning-demo-ff98b",
  storageBucket: "e-learning-demo-ff98b.appspot.com",
  messagingSenderId: "388174675173",
  appId: "1:388174675173:web:47c2aa68582ad4cbc6e80c",
  measurementId: "G-QNJB2J7L5K",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
