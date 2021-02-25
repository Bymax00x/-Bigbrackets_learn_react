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
            <img src="Image/2.jpg"></img>
            </div>
            <div class="contentSection__info">
            <a href='#' className="lead__css">
              <h1>LeaderShip: Practical Skills</h1> </a>
              <p> Any structure</p>
             
            </div>
            <div className="button_div">
              <button>View</button>
            </div>
          </div>

          <div className="tab_head">
            <div className="tab_button">
              <img src="Image/1.jfif"></img>
            </div>
            <div class="contentSection__info">
            <a href='#' className="dig__css">
              <h1>LeaderShip: Digital Marketing</h1> </a>
              <p> Digitial Works</p>
             
            </div>
            <div className="button_div">
              <button>View</button>
            </div>
            
          </div>
        </div>
      </div>
         
         <div className="sub__section">
             <div className="sub__secction">
             <a href='#' className="">
                <p> Show 8 More</p>
                </a>
            </div>
        </div>

        </div>
       
        
    
  );
};

export default NewCours;
