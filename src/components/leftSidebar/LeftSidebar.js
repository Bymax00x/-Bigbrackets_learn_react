import React from "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
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
          <Link to="/lessons">Lessons</Link>
        </li>
        <li>
          <Link to="/rescource">Rescource</Link>
        </li>
        <li>
          <Link to="/mycources">My Cources</Link>
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
