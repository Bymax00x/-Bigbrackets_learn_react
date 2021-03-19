import React, { useState, useEffect } from "react";
import "./test01.css";
import db from "../../components/firebase/firebase";
import firebase from "firebase";

const Test01 = () => {
  const user = firebase.auth().currentUser;
  // const auth = firebase.auth();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [user, setUser] = useState(() => auth.currentUser);

  const { uid, displayName, photoURL } = user;

  console.log(">>>>>>>>>>>>>", user);
  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setMessages(data);
        });
      return unsubscribe;
    }
  }, [db]);

  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await db
  //     .collection("messages")
  //     .orderBy("createdAt")
  //     .limit(100)
  //     .get();

  //   setMessages(data.docs.map((doc) => doc.data()));
  // };

  const check = () => {
    console.log(messages);
  };

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
  };

  return (
    <>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      {/* 
      {messages.map((data, index) => (
        <div key={data.index} className="pa-xl ">
          <div className="notice-title pb-sm">{data.text}</div>
          <div className="notice-category pb-sm">{data.category}</div>
          <div className="notice-desc">{data.desc}</div>
        </div>
      ))} */}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message here"
        />
        <button type="submit" disabled={!newMessage}>
          send
        </button>
      </form>
      <button onClick={check}>check</button>
    </>
  );
};

export default Test01;
