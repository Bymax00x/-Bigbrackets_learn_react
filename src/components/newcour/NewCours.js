import React, { useState, useEffect } from "react";
import "./NewCours.css";
import db from "../../components/firebase/firebase";
const NewCours = () => {
  const [videos, setVideos] = useState([]);

  const check = () => {
    console.log("josn???", videos);
  };

  let arr1 = [1, 2, 3, 4];

  let dummydata = async () =>
    await (
      <div>
        <h1> hello</h1>
        {(videos &&
          videos.map((data, key) => <li key={key}>{data.title}</li>)) ||
          []}

        <button onClick={check}>check</button>
      </div>
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
      {/* {videos.map(([key, val]) => (
        <h2 key={key}>
          {key}: {val.title}
        </h2>
      ))} */}
      <div>
        <h1> hello</h1>
        {(videos && Object.values(videos)) || (
          <div>
            <h1>Loading data</h1>
          </div>
        )}
        {/* {(videos &&
          videos?.map((data, key) => <li key={key}>{data.title}</li>)) ||
          "Loading dataa"} */}

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
