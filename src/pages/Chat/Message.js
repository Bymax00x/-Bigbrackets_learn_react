import React from "react";
import { formatRelative } from "date-fns";

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  return (
    <section className="flex message">
      <section>
        {photoURL ? (
          <img
            className="chat-img"
            src={photoURL}
            alt="Avatar"
            width={60}
            height={60}
          />
        ) : null}
      </section>
      <section className="flex column pl-md ">
        <div className="flex  ">
          <div className="chat-name">
            {displayName ? <p> {displayName} </p> : null}
          </div>

          {createdAt?.seconds ? (
            <div className="ml-md chat-date">
              {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </div>
          ) : null}
        </div>
        <div>{text}</div>
      </section>
    </section>
  );
};

export default Message;
