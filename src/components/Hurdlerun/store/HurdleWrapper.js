import { createContext, useContext, useEffect, useState } from "react";
import { Keystroke } from "../../../controls/Keystroke";

const HurdleState = createContext({
  isJumping: false,
  intervalTester: 0,
});

export function HurdleWrapper({ children }) {
  const [jumping, setJumping] = useState(true);
  const [jumpingOut, setJumpingOut] = useState(jumping);
  const [intervalTestOut, setIntervalTestOut] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalTestOut((currentValue) => {
        return currentValue + 1;
      });
      console.log("parent component useEffect setInterval: ", intervalTestOut);
    }, 1000);
  }, []);

  const context = {
    isJumping: jumpingOut,
    intervalTester: intervalTestOut,
  };

  function handleKeyPress(e) {
    if (e.key === " ") setJumping((currentState) => !currentState);
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
