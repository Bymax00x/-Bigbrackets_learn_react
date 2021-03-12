import React, { useState, useEffect } from "react";
import db from "../../components/firebase/firebase";
const NewCours = () => {
  const [vdoInfo, setVdoInfo] = useState([]);
  useEffect(async () => {
    await getvdoData();
  }, []);
  useEffect(() => {
    console.log("Changes ", vdoInfo);
  }, [vdoInfo]);
  const getvdoData = async () => {
    db.collection("videos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          console.log(">>>>>", doc.data(), key);
          setVdoInfo(vdoInfo.push({ ...doc.data() }));
          // test.push(data);
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default NewCours;
