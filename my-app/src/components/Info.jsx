import React, { useEffect } from "react";
import { useState } from "react";

const Info = () => {
  const data = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [info, setInfo] = useState(data);

  const tick = () => {
    let edad = info.edad + 1;
    setInfo({
      ...info,
      fecha: new Date(),
      edad,
    });
  };

  useEffect(() => {
    const timerID=setInterval(() => {
      tick();
      clearInterval(timerID);
    }, 1000);
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {info.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {info.nombre} {info.apellidos}
      </h3>
      <h1>Edad: {info.edad}</h1>
    </div>
  );
};

export default Info;
