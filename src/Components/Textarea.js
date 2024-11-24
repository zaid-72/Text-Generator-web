import React, { useRef, useState } from "react";

function Textarea(props) {
  //1
  const [text, setText] = useState("");

  //2
  const handeleOnchange = (event) => {
    setText(event.target.value);
  };

  //3
  const handelUpeerCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //4
  const handellowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //5
  const handelClear = () => {
    let newText = text.toLowerCase();
    setText("");
  };

  const handleClear = () => {
    setText("");
  };
  const copyref = useRef(null);

  const handelCopy = () => {
    copyref.current?.select();
    window.navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3 my-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2>{props.headding}</h2>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handeleOnchange}
            ref={copyref}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpeerCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handellowerCase}>
          Convert to L owercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelClear}>
          clear
        </button>

        {/* copy btn */}
        <button className="btn btn-primary mx-2" onClick={handelCopy}>
          Copy
        </button>
      </div>
      <div className="container">
        <h2>Your Text summary</h2>

        {/* <p> {text.length===0?'0':text.split(" ").length} word , {text.length} characters.</p> */}
        <p>
          {text.split(" ").length - 1} word , {text.length} characters.{" "}
        </p>

        <p>
          {text.length === 0 ? "0" : 0.008 * text.split(" ").length} Minutes to
          read .
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textarea;
