import React, { useState, useEffect } from "react";
import "./Chat.css";
import db from "../../components/firebase/firebase";
import firebase from "firebase";
import Message from "./Message";

const Chat = () => {
  var user = firebase.auth().currentUser;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

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

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
    setNewMessage("");
  };

  return (
    <section className="chat-sys">
      <div className="chat-header flex-centered column pb-xl ">
        <span>Welcome to </span>
        <span>E-Learning Discussion</span>
        <span className="chat-header-desc">
          Discuss about the problems and topics here
        </span>
      </div>
      <div3>
        {messages.map((message) => (
          <div className="mb-md chat-desc" key={message.id}>
            <Message {...message} />
          </div>
        ))}
      </div3>

      <form onSubmit={handleOnSubmit} className="mb-md">
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message here"
        />
        <button
          className="bttn-send pa-sm "
          type="submit"
          disabled={!newMessage}
        >
          send
        </button>
      </form>
    </section>
  );
};

export default Chat;
