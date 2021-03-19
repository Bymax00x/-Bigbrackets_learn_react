import React, { useState, useEffect } from "react";
import { YoutubePlayer } from "reactjs-media";
import db from "../../components/firebase/firebase";
import "../../assets/css/layout.css";
import "./Video.css";
const Video = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  }, [db]);
  const fetchData = async () => {
    const data = await db.collection("videos").get();
    setVideos(data.docs.map((doc) => doc.data()));
  };

  return (
    <main>
      <section className="pa-md  ">
        {videos.map((data, index) => (
          <section key={index} className="flex column mb-sm">
            <div className="flex">
              <div className="flex items-center">
                <YoutubePlayer
                  src={data.url} // Reqiured
                  width={250}
                  height={150}
                  allowFullScreen
                />
              </div>
              <div className="pa-lg vid-desc ">
                <div className="pb-sm bold "> {data.title} </div>
                <div className="pb-sm bold">{data.category}</div>
                <div className="pb-sm">{data.desc}</div>
              </div>
            </div>
            {/* <div className="flex">
              <input className="" type="text" placeholder="comment" />
              <button className="px-lg py-sm ">send</button>
            </div> */}
          </section>
        ))}
      </section>
    </main>
  );
};

export default Video;
