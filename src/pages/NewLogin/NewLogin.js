import React from "react";
import firebase from "firebase";
import "./NewLogin.css";
import logo from "../../assets/css/Image/logo.png";

const NewLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  const check = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is logged in");
      } else {
        console.log("user is not logged in");
      }
    });
  };

  const login = () => {
    console.log("singin working");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // ...
      });

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is logged in");
      } else {
        console.log("user is not logged in");
      }
    });
  };
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logged out sucessfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <main className="flex column  items-center ">
      <nav className="flex header items-center justify-center ">
        <img src={logo} className="logo__img" alt="image not available" />
        <div className="title">
          <span className="title-first"> Big </span> Brackets
        </div>
      </nav>
      <section className=" login wrapper flex  column items-center ">
        <section className="login__header ">
          <span className=""> Welcome </span>
          to
          <span className="title-first"> Big </span> Brackets
          <div className="login__header flex justify-center py-sm mb-xl">
            <span className="title-first"> E </span>-Learning
          </div>
        </section>
        <button className="login__bttn" onClick={login}>
          Login with Google
        </button>
      </section>
      {/* This is test <br />
      <button onClick={signIn}>signin</button>
      <button onClick={check}> check login status</button>
      <br />
      <button onClick={logOut}>Sign Out</button> */}
    </main>
  );
};

export default NewLogin;
