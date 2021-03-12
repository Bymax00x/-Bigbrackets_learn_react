import React from "react";
// import Cources from "../../components/cources/Cources";
import Header from "../../components/header/Header";
// import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Notice from "../../components/notice/Notice";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import "./Dashboard.css";
import ALeftSidebar from "../../components/leftSidebar/ALeftSidebar";

const Home = () => {
  return (
    <main>
      <section className="left">
        {/* <LeftSidebar /> */}
        <ALeftSidebar />
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <Notice />
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
