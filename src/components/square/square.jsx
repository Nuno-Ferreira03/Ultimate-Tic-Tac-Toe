import React, { useEffect } from "react";
import "./square.css";
function Square({ value, onSquareClick, next, disabled, bColor, color }) {
  return (
    <button
      style={{ backgroundColor: bColor, color: color }}
      disabled={disabled}
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default Square;
