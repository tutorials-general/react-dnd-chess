import React from "react";
import { useDrag } from "react-dnd";

import { ItemTypes } from "constants/index";

export default function Kinight() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        fontSize: 100,
        opacity: isDragging ? 0.5 : 1,
        fontWeight: "bold",
        cursor: "move"
      }}
    >
      ♘
    </div>
  );
}
