import React, { useState } from "react";
import db from "../../components/firebase/firebase";
import "./AddVideos.css";

const AddVideos = () => {
  const [state, setState] = useState({ title: "", desc: "", url: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(state);
  };

  const addData = () => {
    db.collection("videos")
      .add({
        title: state.title,
        desc: state.desc,
        url: state.url,
        category: state.category,
      })
      .then((docRef) => {
        console.log("Docement written with ID:", docRef.id);
        alert("Document added sucessfully");
      })
      .catch((error) => {
        console.error("Error adding document", error);
      });
  };

  return (
    <main className="flex main-page">
      <section className=" flex column items-center justify-center left-part">
        <div className="flex  column items-center ">
          <h1>Add Videos</h1>
        </div>
        <div className="pa-md form-input">
          Title <br />
          <input
            className="my-md"
            name="title"
            type="text"
            placeholder="Enter Title"
            onChange={handleChange}
          />
          <br />
          category
          <br />
          <input
            className="my-md"
            name="category"
            type="text"
            placeholder="Enter the category"
            onChange={handleChange}
          />
          <br />
          Description <br />
          <input
            className="my-md"
            name="desc"
            type="text"
            placeholder="Enter the Description"
            onChange={handleChange}
          />
          <br />
          URL <br />
          <input
            className="my-md"
            type="text"
            name="url"
            placeholder="Enter the URL"
            onChange={handleChange}
          />
        </div>
        <button className="bttnSubmit half-width" onClick={addData}>
          Upload
        </button>
      </section>
      <section class="image-holder  right-part"> </section>
    </main>
  );
};

export default AddVideos;
