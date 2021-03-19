import React, { useState, useEffect } from "react";
// import Cources from "../../components/cources/Cources";
import Header from "../../components/header/Header";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import Notice from "../../components/notice/Notice";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import "./Dashboard.css";
import ALeftSidebar from "../../components/leftSidebar/ALeftSidebar";
import db from "../../components/firebase/firebase";
import firebase from "firebase";

const Home = () => {
  var adminUser = ["runalmanandhar@gmail.com", "ravi@gmail.com"];
  const [admin, setAdmin] = useState([]);
  const [access, setAccess] = useState(false);
  useEffect(() => {
    fetchData();
    checkUser();
  }, []);

  const fetchData = async () => {
    const data = await db.collection("admin").get();
    setAdmin(data.docs.map((doc) => doc.data()));
  };

  const checkUser = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("user is logged in");
        adminUser.forEach((aUser) => {
          if (user.email == aUser) {
            setAccess(true);
          } else {
            console.log(access);
          }
        });
      } else {
        console.log("user is not logged in");
      }
    });
  };

  const check = () => {
    console.log("wodkint", admin);
    console.log(access);
  };
  return (
    <main>
      <section className="left">
        <button onClick={check}>check</button>
        {/* {access ? <ALeftSidebar /> : <LeftSidebar />} */}
        {/* <LeftSidebar /> */}
      </section>

      <section className="right">
        <Header />
        <div className="articles">
          <article className="articles__cources">
            <Notice />
          </article>
          <article className="articles__calender">
            <RightSidebar />
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
