import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Keystroke } from "../../../controls/Keystroke";

const HurdleState =
  createContext(
      {
      isJumping: false,
      resetJump: ()=>{},
    }
  );

export function HurdleWrapper({ children }) {
  const [jumping, setJumping] = useState(false);
  const jumpingRef = useRef(false);

  useEffect(()=>{
    jumpingRef.current = jumping;
  },[jumping]);
  
  const context = {
    isJumping: jumpingRef,
    resetJump: setJumping,
  };

  function handleKeyPress(e) {
    if (e.key === " ")
      //TODO - figure this shit out!
      setJumping(() => {
        let updatedValue = true;
        console.log("keypress, updating 'jumping' to ", updatedValue);
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
