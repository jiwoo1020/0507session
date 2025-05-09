// TimerDisplay.js -2
import React from "react";

function TimerDisplay(props) {
  return (
    <div>
      <h1>⏱ Timer: {props.seconds}초</h1>
    </div>
  );
}

export default TimerDisplay;