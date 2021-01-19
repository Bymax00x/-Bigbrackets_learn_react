import React from "react";
import "./Cources.css";
import { useSelector } from "react-redux";

const Cources = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  const renderPosts = posts.map((post) => (
    <div className="posts" key={post.id}>
      <h3> {post.title}</h3>
      <p>{post.aurther}</p>
      <p>{post.level}</p>
    </div>
  ));

  const abstractPosts = () => {
    let reqPost = posts.slice(0, 2);
    let postCounter = posts.length;
    console.log(postCounter);
    console.log(reqPost);

    let displayPost = reqPost.map((post) => (
      <div className="posts" key={post.id}>
        <h3> {post.title} </h3>
        <p>{post.aurther}</p>
        <p>{post.level}</p>
      </div>
    ));
    return displayPost;
  };

  return (
    <div className="cources">
      <h1> Your cources</h1>
      <div className="posts__section">{abstractPosts()}</div>
    </div>
  );
};

export default Cources;
