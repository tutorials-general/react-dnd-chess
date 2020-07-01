import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

import { ItemTypes } from "constants/index";
import { knightImage } from "constants/index";

export default function Kinight() {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
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
    </>
  );
}
