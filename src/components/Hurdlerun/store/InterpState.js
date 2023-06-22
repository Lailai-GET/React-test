import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useHurdleState } from "./HurdleWrapper";

const InterpetedState = createContext({
  isJumping: false,
  bottomRow: [],
});

export function InterpWrapper({ children }) {
  const stateCtx = useHurdleState();
  const [jumpingOut, setJumpingOut] = useState(false);
  const currentlyJumping = useRef(false);
  const [animationState, setAnimationState] = useState(0);
  const hurdleOnStage = useRef(false);
  const trippin = useRef(false);
  const animationRef = useRef(0);
  const bottomArray = useRef([
    0,
    0,
    stateCtx.runAnim[animationRef.current],
    0,
    0,
    0,
  ]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      handleTimeOutput();
    }, 3000);

    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    animationRef.current = animationState;
    bottomArray.current[2] = stateCtx.runAnim[animationRef.current];
  }, [animationState]);

  useEffect(() => {
    currentlyJumping.current = jumpingOut;
  }, [jumpingOut]);

  useEffect(() => {
    const runInterval = setInterval(() => {
      handleRunOutput();
    }, 500);

    return () => clearInterval(runInterval);
  }, []);

  function handleTimeOutput() {
    handleJumpOutput();
    handleProgression();
  }

  function handleJumpOutput() {
    setJumpingOut((currentState) => {
      if (currentState) {
        const changedValue = !currentState;
        setAnimationState(0);
        return changedValue;
      }
      if (!currentState && stateCtx.isJumping.current) {
        const changedValue = !currentState;
        setAnimationState(4);
        return changedValue;
      }
      return false;
    });
    stateCtx.resetJump(false);
  }

  function handleRunOutput() {
    setAnimationState((currentState) => {
      if (currentState === 6) return 6;
      if (currentState === 5) return 5;
      if (currentState === 4) return 4;
      if (animationRef.current >= 3) return 0;
      return currentState + 1;
    });
  }

  function handleProgression() {
  }

  function randomHurdle() {
    if (!hurdleOnStage.current) {
      let randomChance = [false, true];
      return randomChance[Math.floor(Math.random() * randomChance.length)];
    }
    return false;
  }

  const context = {
    isJumping: jumpingOut,
    bottomRow: bottomArray.current,
  };
  return (
    <InterpetedState.Provider value={context}>
      {children}
    </InterpetedState.Provider>
  );
}

const useInterpState = () => useContext(InterpetedState);

export { useInterpState };
