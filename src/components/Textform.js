import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // convert to uppercase
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // convert to lowercase
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  };
  const handleOnChange = (event) => {
    // on change event
    console.log("On Change");
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    // clear text
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleCopy = () => {
    // copies text
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        {/* whatever is written in app.js heading it is used here */}
        <div className="form-floating">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#13466e" : "white",
              color: props.mode === "dark" ? "grey" : "#042743",
            }}
            id="myBox"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleUpClick}
        >
          {/* onClick denotes a function which is invoked when button is clicked */}
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-2"
          onClick={handleCopy}
        >
          Copy text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "light" ? "grey" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
          {/* .split(" ") denotes space */}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
