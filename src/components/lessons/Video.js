import React, { useState, useEffect } from "react";
import { YoutubePlayer } from "reactjs-media";
import db from "../../components/firebase/firebase";
import "../../assets/css/layout.css";

const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await db.collection("videos").get();
    setVideos(data.docs.map((doc) => doc.data()));
  };

  return (
    <main>
      <section>
        {videos.map((data, index) => (
          <section key={index}>
            <div>
              <YoutubePlayer
                src={data.url} // Reqiured
                width={400}
                height={200}
              />
            </div>
            <div>{data.title}</div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Video;
