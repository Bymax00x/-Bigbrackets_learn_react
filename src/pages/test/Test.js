import React, { useState } from "react";

const Test = () => {
  const [value, setValue] = useState();
  var formData = {};
  const recordData = (e) => {
    formData = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    // setValue(e.target.name.value);
    console.log(e.target.name);
    console.log(formData);
  };
  return (
    <div>
      <center>
        <form>
          Title
          <input
            type="text"
            name="first"
            placeholder="Enter your name"
            onChange={recordData}
          />
          <br />
          Description
          <input
            type="text"
            name="desc"
            placeholder="Enter your name"
            onChange={recordData}
          />
          <br />
          Video url
          <input
            type="text"
            name="url"
            placeholder="Enter your name"
            onChange={recordData}
          />
          <br />
          <p> You have entered: {value}</p>
          <br />
          <input type="button" value="click me" />
        </form>
      </center>
    </div>
  );
};

export default Test;
