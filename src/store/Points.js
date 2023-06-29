import { createContext, useEffect, useRef, useState } from "react";

const Points = createContext({
  points: 0,
  addPoint: ()=>{},
  resetPoints: ()=>{},
  lastPoints: 0,
  highScore: 0,
});

export function PointWrapper(props) {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [lastPoints, setLastPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const currentPointsRef = useRef(currentPoints);
  const highScoreRef = useRef(highScore);

  useEffect(() => {
    currentPointsRef.current = currentPoints;
    if (currentPoints > highScoreRef.current) {
      setHighScore(currentPoints);
    }
  }, [currentPoints]);
  useEffect(() => {
    highScoreRef.current = highScore;
  }, [highScore]);

  function addPointHandler() {
    setCurrentPoints((current) => current + 1);
  }
  function resetPointsHandler() {
    setLastPoints(currentPointsRef.current);
    setCurrentPoints(0);
  }
  const context = {
    points: currentPoints,
    addPoint: addPointHandler,
    resetPoints: resetPointsHandler,
    lastPoints: lastPoints,
    highScore: highScore,
  };
  return <Points.Provider value={context}>{props.children}</Points.Provider>;
}
export { Points };
