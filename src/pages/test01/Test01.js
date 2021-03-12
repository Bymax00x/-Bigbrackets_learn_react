import React, { useState, useEffect } from "react";
import "./test01.css";
import db from "../../components/firebase/firebase";

const Test01 = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await db.collection("videos").get();
    setVideos(data.docs.map((doc) => doc.data()));
  };
  return (
    <ul>
      {videos.map((data) => (
        <li key={data.title}>{data.title}</li>
      ))}
    </ul>
  );
};

export default Test01;
