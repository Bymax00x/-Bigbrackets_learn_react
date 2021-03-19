import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/ dashboard/Dashboard";
import Lessons from "./pages/lessons/Lessons";
import Signup from "./pages/signup/Signup";
import MyCources from "./pages/myCources/MyCources";
import Rescource from "./pages/resources/Rescource";
import Test from "./pages/test/Test";
import Chat from "./pages/Chat/Chat";
import VideoUpload from "./pages/videoUpload/VideoUpload";
import AddVideos from "./pages/addVideos/AddVideos";
import NoticeUpload from "./pages/noticeUpload/NoticeUpload";
import NewLogin from "./pages/NewLogin/NewLogin";
import { Provider } from "react-redux";
import store from "./app/store";
import ReqVid from "./pages/reqVid/ReqVid";
import VidNoti from "./pages/requestedVid/VidNoti";

function App() {
  return (
    <Provider store={store}>
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
            <Chat />
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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/chat">
            <MyCources />
          </Route>
          <Route path="/reqvid">
            <ReqVid />
          </Route>
          <Route path="/vidNoti">
            <VidNoti />
          </Route>
          <Route path="/">
            <NewLogin />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
