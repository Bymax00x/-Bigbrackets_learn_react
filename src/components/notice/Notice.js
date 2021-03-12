import React, { useState, useEffect } from "react";
import db from "../../components/firebase/firebase";
import "./Notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await db.collection("notices").get();
    setNotices(data.docs.map((doc) => doc.data()));
  };
  return (
    <section>
      <div className="notice-header pb-xl ">Notices</div>
      <section>
        {notices.map((data, index) => (
          <div key={data.index} className="pa-xl ">
            <div className="notice-title pb-sm">{data.title}</div>
            <div className="notice-category pb-sm">{data.category}</div>
            <div className="notice-desc">{data.desc}</div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Notice;
