import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleRemoveExtraSpaces = () => {
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    // console.log("on Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>

          <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>
            Convert To upper Case
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert To LowerCase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleClearText}>
            Clear Text
          </button>

          <button className="btn btn-primary mx-2" onClick={handleCopyText}>
            Copy Text
          </button>

          <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>My Text Summery </h1>
        <p>
          {text.split(" ").length} words,{text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes To read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
