import React from "react";
import { renderSquare } from "helper";

export default function Board({ knightPosition }) {
  const squares = Array(64)
    .fill(null)
    .map((item, index) => renderSquare(index, knightPosition));
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100vh",
      }}
    >
      {squares}
    </div>
  );
}
