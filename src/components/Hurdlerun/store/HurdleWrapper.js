import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Keystroke } from "../../../controls/Keystroke";
import { Points } from "../../../store/Points";

const HurdleState =
  createContext(
      {
      isJumping: false,
      resetJump: ()=>{},
      runAnim: [],
      increasePoints: ()=>{},
      resetPoints: ()=>{},
      currentLocalPoints: 0
    }
  );

export function HurdleWrapper({ children }) {
  const [jumping, setJumping] = useState(false);
  const jumpingRef = useRef(false);
  const pointsCtx = useContext(Points);
  const [localPoints, setLocalPoints] = useState(0)

  const runAnimation = [1, 2, 1, 3];

  useEffect(()=>{
    jumpingRef.current = jumping;
  },[jumping]);

  function addPointHandler(){
    setLocalPoints(localPoints + 1);
    pointsCtx.addPoint();
  }
  
  function resetPointsHandler(){
    setLocalPoints(0);
    pointsCtx.resetPoints();
  }

  const context = {
    isJumping: jumpingRef,
    resetJump: setJumping,
    runAnim: runAnimation,
    increasePoints: addPointHandler,
    resetPoints: resetPointsHandler,
    currentLocalPoints: localPoints,
  };

  function handleKeyPress(e) {
    if (e.key === " ")
      setJumping(() => {
        let updatedValue = true;
        return updatedValue;
      });
  }


  //bruk en haug med use states, set context først når intevallen trigger
  return (
    <HurdleState.Provider value={context}>
      <Keystroke keyPress={handleKeyPress} />
      {children}
    </HurdleState.Provider>
  );
}

const useHurdleState = () => useContext(HurdleState);

export { useHurdleState };
