let knightPosition = [0, 0];
let observer = null;

const emitChange = () => {
  observer(knightPosition);
};

export const observe = (o) => {
  if (observer) {
    throw new Error("Muliple observers not implemented");
  }
  observer = o;
  emitChange();
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};
