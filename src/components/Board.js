import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { renderSquare } from "helper";

export default function Board({ knightPosition }) {
  const squares = Array(64)
    .fill(null)
    .map((item, index) => renderSquare(index, knightPosition));
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
}
