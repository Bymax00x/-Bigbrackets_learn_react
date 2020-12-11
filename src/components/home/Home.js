import React from "react";
import Header from "../Header/Header";
import RightSidebar from "../RightSidebar";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="left">This is first</section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <h1> Cources</h1>
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
