import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("Button Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  // onChange event is called so that we can type in the text box and see changes
  const handleChange = (event) => {
    // console.log("Change applied");
    // event.target.value is used so to take user input and set text based on that
    setText(event.target.value);
  };

  const handleSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  // Using state component in function based method
  const [text, setText] = useState("Enter text here");
  //   setText("Text here");
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleClick}>
          Convert to upper text
        </button>
        <button className="btn btn-success mx-1" onClick={handleSpace}>
          Remove Extra spaces
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container">
        <h2>Summary</h2>
        <p>Words Count : {text.split(" ").length} </p>
        <p>Letters Count: {text.length} </p>
        <p>Time taken to read per minute: {0.008 * text.split(" ").length} </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
