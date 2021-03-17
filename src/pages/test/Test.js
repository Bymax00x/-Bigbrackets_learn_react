import React from "react";
import firebase from "firebase";

const Test = () => {
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

  const signIn = () => {
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
    <div>
      This is test <br />
      <button onClick={signIn}>signin</button>
      <button onClick={check}> check login status</button>
      <br />
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default Test;
