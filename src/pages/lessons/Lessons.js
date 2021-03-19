import React from "react";
import Cources from "../../components/cources/Cources";
import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
// import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Video from "../../components/lessons/Video";

const Lessons = () => {
  return (
    <main>
      <section className="left">
        <LeftSidebar />
      </section>
      <section className="right">
        <Header />
        <article className="articles__cources">
          <Video />
        </article>
      </section>
    </main>
  );
};

export default Lessons;
