import React, { useState } from "react";

import "./reloj.css";

export const Reloj = () => {
  const [time, setTime] = useState("");

  setTimeout(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return (
    <div className="reloj__container">
      <h2 className="reloj__title">{time}</h2>
    </div>
  );
};
