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
    !currentlyJumping.current
      ? (bottomArray.current[2] = stateCtx.runAnim[animationRef.current])
      : (bottomArray.current[2] = 0);
    animationRef.current = animationState;
  }, [animationState]);

  useEffect(() => {
    currentlyJumping.current = jumpingOut;
    jumpingOut ? bottomArray.current[2] = 0 : bottomArray.current[2] = stateCtx.runAnim[animationRef.current];
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
        return changedValue;
      }
      if (!currentState && stateCtx.isJumping.current) {
        const changedValue = !currentState;
        return changedValue;
      }
      return false;
    });

    stateCtx.resetJump(false);
  }

  function handleRunOutput() {
    setAnimationState((currentState) => {
      if (currentState >= 3) return 0;
      return currentState + 1;
    });
  }

  function handleHurdlePostRunner() {
    if (bottomArray.current[2] === 7) {
      trippin.current = false;
      return 6;
    } else if (bottomArray.current[2] === 5) {
      return 5;
    } else return 0;
  }


  function handleProgression() {
    if (bottomArray.current[0] === 5 || bottomArray.current[0] === 6) {
      hurdleOnStage.current = false;
      bottomArray.current[0] = 0;
    }
    bottomArray.current[0] = bottomArray.current[1];
    bottomArray.current[1] = handleHurdlePostRunner();
    bottomArray.current[3] = bottomArray.current[4];
    bottomArray.current[4] = bottomArray.current[5];
    if (randomHurdle()) {
      bottomArray.current[5] = 5;
      hurdleOnStage.current = true;
    } else bottomArray.current[5] = 0;
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
