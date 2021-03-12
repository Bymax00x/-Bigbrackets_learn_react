import React, { useState, useEffect } from "react";
import "./NewCours.css";
import db from "../../components/firebase/firebase";
const NewCours = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await db.collection("videos").get();
    setVideos(data.docs.map((doc) => doc.data()));
  };

  const check = () => {
    console.log("josn???", videos);
  };
  const display = (
    <h1>
      This is test <span>first</span>
    </h1>
  );

  return (
    // <div>
    //   <div className="div_in">
    //     <h1> My Courses</h1>
    //     <h1> Ongoing-2</h1>
    //     <div className="contentSection">
    //       <div className="tab_head">
    //         <div className="tab_button"></div>
    //         <div className="contentSection__info">
    //           <a href="#" className="lead__css">
    //             <h1>{videos.title}</h1>
    //           </a>
    //           <p> Any structure</p>
    //         </div>
    //         <div className="button_div">
    //           <button>View</button>
    //         </div>
    //       </div>

    //       <div className="tab_head">
    //         <div className="tab_button"></div>
    //         <div className="contentSection__info">
    //           <a href="#" className="dig__css">
    //             <h1>LeaderShip: Digital Marketing</h1>
    //           </a>
    //           <p> Digitial Works</p>
    //         </div>
    //         <div className="button_div">
    //           <button>View</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="sub__section">
    //     <div className="sub__secction">
    //       <a href="#" className="">
    //         <p> Show 8 More</p>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div>
        {display}

        <button onClick={check}>check</button>
      </div>
    </div>
  );
};

export default NewCours;

// const demoFile = [
//   {
//     title: "demo1",
//     description: "this is demo",
//     url: "https:/demoutube",
//   },
//   {
//     title: "demo2",
//     description: "this is demo",
//     url: "https:/demoutube",
//   },
//   {
//     title: "demo3",
//     description: "this is demo",
//     url: "https:/demoutube",
//   },
// ];
