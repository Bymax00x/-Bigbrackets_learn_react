import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <main className="flex main-page">
      <section className=" flex column items-center justify-center left-part">
        <div className="flex  column items-center ">
          <h1>Welcome</h1>
          <h1>To </h1>
          <h1>E-Learning</h1>
        </div>
        <div className="pa-md form-input">
          <input
            className="mb-md"
            type="text"
            placeholder="Enter your username"
          />
          <br />
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="bttnSubmit half-width">Sign in</button>
      </section>
      <section class="image-holder  right-part"> </section>
    </main>
  );
};

export default Login;
