import React, { useState } from "react";
import db from "../../components/firebase/firebase"

const VideoUpload = () => {

  const [state, setState] = useState({ title: "", desc: "", url:"" });


  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));

    console.log(state);
};

const addData =()=>{
    db.collection("videos").add({
        title:state.title,
        desc:state.desc,
        url:state.url
    })
    .then((docRef)=>{
        console.log("Docement written with ID:",docRef.id);
    })
    .catch((error)=>{
        console.error("Error adding document",error);
    })
}


  return (
    <div>
      <center>
        <form>
          Title
          <input
            type="text"
            name="title"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
          Description
          <input
            type="text"
            name="desc"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
          Video url
          <input
            type="text"
            name="url"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <br />
        
          <br />
          <input type="button" onClick={addData} value="click me" />
        </form>
      </center>
    </div>
  );
};

export default VideoUpload;




