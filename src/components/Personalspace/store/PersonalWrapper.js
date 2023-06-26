import { createContext, useContext, useState } from "react";
import { Points } from "../../../store/Points";
import { Keystroke } from "../../../controls/Keystroke";

const PersonalStore = createContext({
  screenCells: [],
  localPoints: 0,
});

export function PresonalWrapper({ children }) {
  const pointsCtx = useContext(Points);
  const [count, setCount] = useState(0);
  const [screenArray, setScreenArray] = useState([[], []]);

  const handleKeyPress = (e) => {
    //temp placeholder
    if (e.key === "p") console.log("Personal Triggered");
  };
  function addPointHandler() {
    pointsCtx.addPoint();
    setCount(count + 1);
  }
  function resetPointsHandler() {
    pointsCtx.resetPoints();
    setCount(0);
  }
  const context = { screenCells: screenArray, localPoints: count };

  return (
    <PersonalStore.Provider value={context}>
      <Keystroke keyPress={handleKeyPress} />
      {children}
      <div className="MiniPlayer">
        <div>Personal Space goes here,</div>
        <button onClick={addPointHandler}>Add Points</button>
        <button onClick={resetPointsHandler}>Game Over Reset Points</button>
        <div>Current game:{count}</div>
      </div>
    </PersonalStore.Provider>
  );
}
const usePersonalStore = () => useContext(PersonalStore);

export { usePersonalStore };
