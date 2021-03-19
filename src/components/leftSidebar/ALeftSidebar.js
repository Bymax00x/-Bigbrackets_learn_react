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
  );
};

export default ALeftSidebar;
