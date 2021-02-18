import React from "react";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="main">
      <div className="logo">
        <h1> E-learning Academy</h1>
      </div>

      <section className="pages">
        <li>
          <a href="#" className="active">
            Dashboard
          </a>
        </li>

        <li>
          <a href="http://localhost:3000/lessons">Lessons</a>
        </li>
        <li>
          <a href="#">Resources</a>
        </li>
        <li>
          <a href="http://localhost:3000/mycources">My Courses</a>
        </li>
        <li>
          <a href="#">Chat</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </section>
      <section className="files">
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
      </section>
    </div>
  );
};

export default LeftSidebar;
