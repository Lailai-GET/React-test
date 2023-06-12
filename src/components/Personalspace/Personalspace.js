import { useState, useContext } from "react";
import {Points} from "../../store/Points";

function PersonalSpace(props) {
  const [count, setCount] = useState(0);
  const pointsCtx = useContext(Points);



  function addPointHandler() {
    pointsCtx.addPoint();
    setCount(count + 1);
  }
  function resetPointsHandler() {
    pointsCtx.resetPoints();
    setCount(count >= 1 ?? 0);
  }

  return (
    <div className="MiniPlayer">
      <div>Personal Space goes here,</div>
      <button onClick={addPointHandler}>Add Points</button>
      <button onClick={resetPointsHandler}>Game Over Reset Points</button>
      <div>Current game:{count}</div>
      <div>{props.text}</div>
    </div>
  );
}
export { PersonalSpace };
