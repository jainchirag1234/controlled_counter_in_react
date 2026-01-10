import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const dataValue = document.querySelector("#inputName").value;
    // console.log(dataValue);
    console.log(name);
  };
  return (
    <div className="container state-container">
      <h1>unControlled Component</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="inputName"
            name="name"
            type="text"
            // value="chirag"
            value={name}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="state-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Controlled;
