import React, { useRef, useState } from "react";
import "../css/RenderizadoCond.css";

const RenderizadoCond = () => {
  const square = useRef("");
  let red = 0;
  let green = 0;
  let blue = 0;
  const [color, setColor] = useState( [red, green, blue] );
  const [intervalId, setIntervalId] = useState(null);

  const takeRandomValue = () => {
    setIntervalId(setInterval(() => {
      red = Math.floor(Math.random() * 255);
      green = Math.floor(Math.random() * 255);
      blue = Math.floor(Math.random() * 255);
      setColor([red, green, blue]);
    }, 1000));
  };

  const stopRandomValue = () => {
    setIntervalId(clearInterval(intervalId));
    console.log("me sali");
  };

  return (
    <div
      ref={square}
      className="cuadrado"
      onMouseEnter={takeRandomValue}
      onMouseLeave={stopRandomValue}
      onDoubleClick={stopRandomValue}
      style={{ backgroundColor: `rgb(${color})` }}
    ></div>
  );
};

export default RenderizadoCond;
