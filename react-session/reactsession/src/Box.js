import React from "react";
import "./App.css";

function Box(props) {
  return (
    <div>
      <div className="box">
        Box1
        {props.name}
      </div>
    </div>
  );
}

export default Box;