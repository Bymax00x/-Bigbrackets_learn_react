import React from "react";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
const ALeftSidebar = () => {
  return (
    <div className="main">
      <div className="logo">
        <h1> E-learning Academy</h1>
      </div>

      <section className="pages">
        <li>
          <Link to="/" className="active">
            News Feed
          </Link>
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
          <a href="#">Settings</a>
        </li>
      </section>
      <section className="files">
        <h1> Admin Controls</h1>
        <li>
          <Link to="addVideos">Upload Video</Link>
        </li>
        <li>
          <a href="#">Add News</a>
        </li>
      </section>
    </div>
  );
};

export default ALeftSidebar;
