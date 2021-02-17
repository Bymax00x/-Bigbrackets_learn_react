import React from "react";
import "./css/Signup.css";
import "../../assets/css//layout.css";

const Signup = () => {
  return (
    <div class="flex-centered column ">
      <h1>Signup</h1>
      <form class="flex  column pt-md  ">
        Username
        <input type="text" placeholder="Enter your username" />
        Password
        <input type="password" placeholder="Enter your password" />
        Retype Password
        <input type="password" placeholder="Enter your password again" />
      </form>
    </div>
  );
};

export default Signup;
