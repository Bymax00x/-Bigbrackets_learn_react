import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/ dashboard/Dashboard";
import Lessons from "./pages/lessons/Lessons";
import Signup from "./pages/signup/Signup";
import MyCources from "./pages/myCources/MyCources";
import Rescource from "./pages/resources/Rescource";
import Test from "./pages/test/Test";
import Test01 from "./pages/test01/Test01";
import VideoUpload from "./pages/videoUpload/VideoUpload";
import AddVideos from "./pages/addVideos/AddVideos";
import NoticeUpload from "./pages/noticeUpload/NoticeUpload";
import NewLogin from "./pages/NewLogin/NewLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/lessons">
          <Lessons />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/mycources">
          <MyCources />
        </Route>
        <Route path="/rescource">
          <Rescource />
        </Route>
        <Route path="/vupload">
          <VideoUpload />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/addVideos">
          <AddVideos />
        </Route>
        <Route path="/noticeUpload">
          <NoticeUpload />
        </Route>
        <Route path="/noticeUpload">
          <NoticeUpload />
        </Route>
        <Route path="/login">
          <NewLogin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
