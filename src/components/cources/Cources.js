import React from "react";
import "./Cources.css";
import { useSelector } from "react-redux";

const Cources = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => (
    <div className="posts" key={post.id}>
      <h3> {post.title}</h3>
      <p>{post.aurther}</p>
      <p>{post.level}</p>
    </div>
  ));

  return (
    <div className="cources">
      <h1> Your cources</h1>
      <div className="posts__section">{renderPosts}</div>
    </div>
  );
};

export default Cources;
