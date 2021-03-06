import React from "react";
import Cources from "../../components/cources/Cources";
import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import "./MyCourses.css";
import NewCours from "../../components/newcour/NewCours";


const MyCources = () => {
  return (
    <main>
      <section className="left">
        <LeftSidebar />
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <NewCours />
          </article>
          <article className="articles__calender">
            <RightSidebar />
          </article>
        </div>
      </section>
    </main>
  );
};

export default  MyCources;
