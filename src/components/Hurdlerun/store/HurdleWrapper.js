import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Keystroke } from "../../../controls/Keystroke";

const HurdleState =
  createContext(
      {
      isJumping: false,
      resetJump: ()=>{},
      runAnim: [],
    }
  );

export function HurdleWrapper({ children }) {
  const [jumping, setJumping] = useState(false);
  const jumpingRef = useRef(false);

  const runAnimation = [1, 2, 1, 3];

  useEffect(()=>{
    jumpingRef.current = jumping;
  },[jumping]);
  
  const context = {
    isJumping: jumpingRef,
    resetJump: setJumping,
    runAnim: runAnimation,
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
