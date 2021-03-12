import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/ dashboard/Dashboard";
import Lessons from "./pages/lessons/Lessons";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Video from "./pages/video/Video";
import MyCources from "./pages/myCources/MyCources";
import Rescource from "./pages/resources/Rescource";
import Landing from "./pages/Landing/Landing";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lessons">
          <Lessons />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/video">
          <Video />
        </Route>
        <Route path="/mycources">
          <MyCources />
        </Route>
        <Route path="/rescource">
          <Rescource />
        </Route>
        <Route path="/landing">
          <Landing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
