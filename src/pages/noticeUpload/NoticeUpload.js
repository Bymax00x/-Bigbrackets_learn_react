import React, { useState } from "react";
import db from "../../components/firebase/firebase";
import "./NoticeUpload.css";

const NoticeUpload = () => {
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
    db.collection("notices")
      .add({
        title: state.title,
        desc: state.desc,
        category: state.category,
      })
      .then((docRef) => {
        console.log("Docement written with ID:", docRef.id);
        alert("Document added sucessfully");
        setState({});
      })
      .catch((error) => {
        console.error("Error adding document", error);
      });
  };

  return (
    <main className="flex main-page">
      <section className=" flex column items-center justify-center left-part">
        <div className="flex  column items-center ">
          <h1>Add Notices</h1>
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
        </div>
        <button className="bttnSubmit half-width" onClick={addData}>
          Sign in
        </button>
      </section>
      <section class="image-holder  right-part"> </section>
    </main>
  );
};

export default NoticeUpload;
