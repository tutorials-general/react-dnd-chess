import React from "react";

import Square from "components/Square";
import Knight from "components/Knight";

export const renderSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKightHere = knightX === x && knightY === y;
  const piece = isKightHere ? <Knight /> : null;
  return (
    <div style={{ width: "12.5%", height: "12.5%" }}>
      <Square black={black}>{piece}</Square>
    </div>
  );
};
