import React from "react";
import Cources from "../cources/Cources";
import Header from "../header/Header";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar";
import "./Dashboard.css";

const Home = () => {
  return (
    <main>
      <section className="left">
        <LeftSidebar />
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <Cources />
          </article>
          <article className="articles__calender">
            <RightSidebar />
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
