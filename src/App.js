import "./App.css";
import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");  

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar
        titel="WEBtext"
        mode={mode}
        home="Home"
        aboutText="About"
        toggle={toggle}
      />
      <div className="container">
        <Textarea headding="Enter Text to Analyze " />
      </div>
    </div>
  );
}

export default App;
