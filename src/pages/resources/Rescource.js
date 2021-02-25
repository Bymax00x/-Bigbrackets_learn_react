import React from "react";
import Cources from "../../components/cources/Cources";
import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";




const Resources = () => {
  return (
    <main>
      <section className="left">
        <LeftSidebar />
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            
          </article>
          <article className="articles__calender">
            <RightSidebar />
          </article>
        </div>
      </section>
    </main>
  );
};

export default  Resources;
