import React from "react";
import { useState, useEffect } from "react";

function Clock({ time, setTime }) {

  useEffect(() => {
    if (time <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const format = () => {
    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const formattedMinutes = String(minutos).padStart(2, "0");
    const formattedSeconds = String(segundos).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <div>
        <h1>Clock</h1>
        <p>{format()}</p>
      </div>
    </>
  );
}

export default Clock;
