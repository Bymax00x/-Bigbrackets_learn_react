import React, { useState, useEffect } from "react";
import db from "../../components/firebase/firebase";

const VideoUpload = () => {
  const [state, setState] = useState({ title: "", desc: "", url: "" });
  const [vidoes, setVidoes] = useState([{ title: "", desc: "", url: "" }]);
  useEffect(() => {
    showData();
  }, []);

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
      })
      .then((docRef) => {
        console.log("Docement written with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document", error);
      });
  };

  const showData = () => {
    console.log("working");
    db.collection("videos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          console.log("???", data);
          setVidoes(vidoes.push(data));
          // setVidoes([
          //   ...vidoes,
          //   {
          //     title: doc.data().title,
          //     desc: doc.data().desc,
          //     url: doc.data().url,
          //   },
          // ]);
        });
        console.log(vidoes);

        return <p> This is after showwdata</p>;
      });

    //specific vid display
    // db.collection("videos").doc("iTo0H48fPr70QZiaGuYv").get().then((doc) => {
    //     if (doc.exists) {
    //         console.log("Document data:", doc.data());
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //     }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });
  };

  const check = () => {
    return <h1>this is check</h1>;
  };

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
      <div>
        <h1> :: The Video Databases ::</h1>
        <p>{check}</p>
        <button onClick={showData}>Show Databases</button>
      </div>
    </div>
  );
};

export default VideoUpload;
