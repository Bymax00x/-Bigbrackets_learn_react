import React from "react";
import { YoutubePlayer } from "reactjs-media";

const Video = () => {
  return (
    <div>
      <YoutubePlayer
        src="https://youtu.be/T3E9Wjbq44E?list=PLWamJpd-Y6dmAbNiBP_aXoe3LU23uKdtL" // Reqiured
        width={1200}
        height={600}
      />
    </div>
  );
};

export default Video;
