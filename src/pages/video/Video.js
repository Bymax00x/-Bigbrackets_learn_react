import React from "react";
import { YoutubePlayer } from "reactjs-media";
import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";


const Video = () => {
  return (
    <main>
    <section className="left">
      <LeftSidebar />
    </section>

    <section className="right">
      <Header />
      <div className="articles">
        <article className="articles__cources">
        <div>
      <YoutubePlayer
        src="https://youtu.be/T3E9Wjbq44E?list=PLWamJpd-Y6dmAbNiBP_aXoe3LU23uKdtL" // Reqiured
        width={900}
        height={500}
      />
    </div>
          
        </article>
        <article className="articles__calender">
          <RightSidebar />
        </article>
      </div>
    </section>
  </main>
);
};
    
export default Video;
