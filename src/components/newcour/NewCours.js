import React from "react";
import "./NewCours.css";
const NewCours = () => {
  const demoFile = [
    {
      title: "demo1",
      description: "this is demo",
      url: "https:/demoutube",
    },
    {
      title: "demo1",
      description: "this is demo",
      url: "https:/demoutube",
    },
    {
      title: "demo1",
      description: "this is demo",
      url: "https:/demoutube",
    },
  ];
  return (
    <div>
      <div className="div_in">
        <h1> My Courses</h1>
        <h1> Ongoing-2</h1>
        <div class="contentSection">
          <div className="tab_head">
            <div className="tab_button">
              <h1>Image here</h1>
            </div>
            <div class="contentSection__info">
              <h1>LeaderShip: Practical Skills</h1>
              <p> Any structure</p>
            </div>
            <div className="button_div">
              <button>View</button>
            </div>
          </div>

          <div className="tab_head">
            <div className="tab_button">
              <h1>Image here</h1>
            </div>
            <div class="contentSection__info">
              <h1>LeaderShip: Digital Marketing</h1>
              <p> Digitial Works</p>
            </div>
            <div className="button_div">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCours;
