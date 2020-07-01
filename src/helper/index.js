import React from "react";

import Knight from "components/Knight";
import BoardSquare from "components/BoardSquare";

export const renderSquare = (i, knightPosition) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
};

const renderPiece = (x, y, [knightX, knightY]) => {
  if (knightX === x && knightY === y) {
    return <Knight />;
  }
};
