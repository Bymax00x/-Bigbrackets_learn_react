import React from "react";

import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RequestedVid from "../../components/requestedVid/RequestedVid";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const VidNoti = () => {
  return (
    <main>
      <section className="left">
        <LeftSidebar />
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <RequestedVid />
          </article>
          <article className="articles__calender">
            <RightSidebar />
          </article>
        </div>
      </section>
    </main>
  );
};

export default VidNoti;
