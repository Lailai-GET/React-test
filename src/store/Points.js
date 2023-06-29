import { createContext, useState } from "react";

const Points = createContext({
  points: 0,
});

export function PointWrapper(props) {
  const [currentPoints, setCurrentPoints] = useState(0);

  function addPointHandler() {
    setCurrentPoints((current) => current + 1);
  }
  function resetPointsHandler() {
    setCurrentPoints(0);
  }
  const context = {
    points: currentPoints,
    addPoint: addPointHandler,
    resetPoints: resetPointsHandler,
  };
  return (
    <Points.Provider value={context}>
      {props.children}
    </Points.Provider>
    );
}
export {Points};
