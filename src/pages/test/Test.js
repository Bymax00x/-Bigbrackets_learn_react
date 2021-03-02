import React, { useState } from "react";

const Test = () => {
  const [state, setState] = useState({ title: "", desc: "", url:"" });
const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));

    console.log(state);
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
          <input type="button" value="click me" />
        </form>
      </center>
    </div>
  );
};

export default Test;




