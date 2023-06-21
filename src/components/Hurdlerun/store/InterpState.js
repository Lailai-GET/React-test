import { createContext, useState, useContext, useEffect } from "react";
import { useHurdleState } from "./HurdleWrapper";

const InterpetedState = createContext({
  isJumping: false,
});

export function InterpWrapper({ children }) {
  const stateCtx = useHurdleState();
  const [jumpingOut, setJumpingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleOutput();
    }, 3000);
  }, []);

  function handleOutput() {
    setJumpingOut((currentState) => {
      console.log("handleOutput, setJumpingOut 'stateCtx.isJumping'", stateCtx.isJumping.current);
      if (currentState) {
        const changedValue = !currentState;
        console.log("handleOutput if jumping 'jumpingOut'", changedValue);
        return changedValue;
      }
      if (!currentState && stateCtx.isJumping.current) {
        const changedValue = !currentState;
        console.log(
          "handleOutput if not jumping 'stateCtx.isJumping' ",
          stateCtx.isJumping.current
        );
        console.log("handleOutput if not jumping 'jumpingOut' ", changedValue);
        return changedValue;
      }
      return false;
    });
    stateCtx.resetJump(false);
  }

  const context = {
    isJumping: jumpingOut,
  };
  return (
    <InterpetedState.Provider value={context}>
      {children}
    </InterpetedState.Provider>
  );
}

const useInterpState = () => useContext(InterpetedState);

export { useInterpState };
