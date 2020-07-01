import React from "react";
import Square from "components/Square";

export default function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  return <Square black={black}>{children}</Square>;
}
