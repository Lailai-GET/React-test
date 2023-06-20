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
    console.log(
      "handleOutput 'stateCtx.isJumping' bafore any calculations is done ",
      stateCtx.isJumping
    );
    setJumpingOut((currentState) => {
      if (currentState) {
        const changedValue = !currentState;
        console.log("handleOutput if jumping 'jumpingOut'", changedValue);
        return changedValue;
      }
      if (!currentState && stateCtx.isJumping) {
        const changedValue = !currentState;
        console.log(
          "handleOutput if not jumping 'stateCtx.isJumping' ",
          stateCtx.isJumping
        );
        console.log("handleOutput if not jumping 'jumpingOut' ", changedValue);
        return changedValue;
      }
    });
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
