import React, { useState, useEffect } from "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
import db from "../../components/firebase/firebase";
import firebase from "firebase";

const LeftSidebar = () => {
  var adminUser = ["runalmanandhar@gmail.com", "ravi@gmail.com"];
  const [admin, setAdmin] = useState([]);
  const [access, setAccess] = useState(false);
  useEffect(() => {
    fetchData();
    checkUser();
  }, []);

  const fetchData = async () => {
    const data = await db.collection("admin").get();
    setAdmin(data.docs.map((doc) => doc.data()));
  };

  const checkUser = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is logged in");
        adminUser.forEach((aUser) => {
          if (user.email == aUser) {
            setAccess(true);
          } else {
            console.log(access);
          }
        });
      } else {
        console.log("user is not logged in");
      }
    });
  };

  const leftSidebar = () => {
    return (
      <>
        <div className="main">
          <div className="logo">
            <h1> E-learning Academy</h1>
          </div>

          <section className="pages">
            <li>
              <Link to="/dashboard" className="active">
                News Feed
              </Link>
            </li>

            <li>
              <Link to="/lessons">Lessons</Link>
            </li>

            <li>
              <a href="#">Req Videos</a>
            </li>
            <li>
              <a href="#">Add Notices</a>
            </li>

            <li>
              <Link to="/login">Settings</Link>
            </li>
          </section>
        </div>
      </>
    );
  };

  const aSideBar = () => {
    return (
      <>
        <div className="main">
          <div className="logo">
            <h1> E-learning Academy</h1>
          </div>

          <section className="pages">
            <li>
              <Link to="/dashboard" className="active">
                News Feed
              </Link>
            </li>

            <li>
              <Link to="/lessons">Lessons</Link>
            </li>
          </section>
          <section className="files">
            <h1> Admin Controls</h1>
            <li>
              <Link to="addVideos">Upload Video</Link>
            </li>
            <li>
              <Link to="noticeUpload">Add News</Link>
            </li>
          </section>
        </div>
      </>
    );
  };

  return {
    /* <section className="files">
        <h1> My Files</h1>
        <li>
          <a href="#">Assets</a>
        </li>
        <li>
          <a href="#">Templates</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Documents</a>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
        <li>
          <Link to="/rescource">Rescource</Link>
        </li>
        <li>
          <Link to="/mycources">My Cources</Link>
        </li>
      </section> */
  };
};

export default LeftSidebar;
