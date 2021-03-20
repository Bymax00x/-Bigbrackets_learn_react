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

//demo database

// const firebaseConfig = {
//   apiKey: "AIzaSyB6XZNutrfk-GfJP5Wpfua91VYSqTmsBEg",
//   authDomain: "e-learning-demo-ff98b.firebaseapp.com",
//   projectId: "e-learning-demo-ff98b",
//   storageBucket: "e-learning-demo-ff98b.appspot.com",
//   messagingSenderId: "388174675173",
//   appId: "1:388174675173:web:47c2aa68582ad4cbc6e80c",
//   measurementId: "G-QNJB2J7L5K",
// };

// demo01

const firebaseConfig = {
  apiKey: "AIzaSyDG1wHdqGAHayH3452LsZvXE8062lckpn0",
  authDomain: "e-learning-demo01.firebaseapp.com",
  projectId: "e-learning-demo01",
  storageBucket: "e-learning-demo01.appspot.com",
  messagingSenderId: "182294410880",
  appId: "1:182294410880:web:b8b8bb96761c24adf7d865",
  measurementId: "G-NN8HKBLVL0",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDYdXLyoTh52ZWmfkVWaADlHvBk6MbEEd8",
//   authDomain: "e-learning-demo02.firebaseapp.com",
//   projectId: "e-learning-demo02",
//   storageBucket: "e-learning-demo02.appspot.com",
//   messagingSenderId: "460955105803",
//   appId: "1:460955105803:web:c6dbefd8c7c6856bb8250e",
//   measurementId: "G-NMMCLSV6T0"
// }
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
