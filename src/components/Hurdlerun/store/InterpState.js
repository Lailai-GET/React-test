import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useHurdleState } from "./HurdleWrapper";

const InterpetedState = createContext({
  isJumping: false,
  bottomRow: [],
  localPoints: 0
});

export function InterpWrapper({ children }) {
  const stateCtx = useHurdleState();
  const [jumpingOut, setJumpingOut] = useState(false);
  const [trippinOut, settrippinOut] = useState(false);
  const currentlyJumping = useRef(false);
  const [animationState, setAnimationState] = useState(0);
  const [hurdleIn3, setHurdleIn3] = useState(false);
  const currentlyHurdleIn3Ref = useRef(false);
  const hurdleOnStage = useRef(false);
  const currentlyTrippin = useRef(false);
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
    if (!currentlyJumping.current) {
      if (!currentlyTrippin.current) {
        bottomArray.current[2] = stateCtx.runAnim[animationRef.current];
      }
    }
    if (currentlyHurdleIn3Ref.current && currentlyJumping.current) {
      bottomArray.current[2] = 5;
    }
  }, [animationState]);

  useEffect(() => {
    currentlyJumping.current = jumpingOut;
    if (currentlyHurdleIn3Ref.current && currentlyJumping.current) {
      stateCtx.increasePoints();
      bottomArray.current[2] = 5;
    }
    if (!currentlyHurdleIn3Ref.current && currentlyJumping.current) {
      bottomArray.current[2] = 0;
    }
    if (!currentlyHurdleIn3Ref.current && !currentlyJumping.current) {
      bottomArray.current[2] = stateCtx.runAnim[animationRef.current];
    }
  }, [jumpingOut]);

  useEffect(() => {
    currentlyTrippin.current = trippinOut;
    if(currentlyTrippin.current){
      stateCtx.resetPoints();
      bottomArray.current[2] = 7;
    }
    if(!currentlyTrippin.current && !currentlyJumping.current && !currentlyHurdleIn3Ref.current){
      bottomArray.current[2] = stateCtx.runAnim[animationRef.current];
    }
  }, [trippinOut]);

  useEffect(() => {
    currentlyHurdleIn3Ref.current = hurdleIn3;
  }, [hurdleIn3]);

  useEffect(() => {
    const runInterval = setInterval(() => {
      handleRunOutput();
    }, 500);

    return () => clearInterval(runInterval);
  }, []);

  function handleTimeOutput() {
    handleJumpOutput();
    handleTrippinOut();
    handleHurdleIn3();
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

  function handleTrippinOut() {
    settrippinOut((currentValue)=>{
      if (currentValue) return false;
      if(currentlyHurdleIn3Ref.current && !stateCtx.isJumping.current) return true;
    });
  }

  function handleHurdleIn3() {
    setHurdleIn3(false);
  }

  function handleRunOutput() {
    setAnimationState((currentState) => {
      if (currentState >= 3) return 0;
      return currentState + 1;
    });
  }

  function handleHurdlePostRunner() {
    if (bottomArray.current[2] === 7) {
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
    if (currentlyJumping.current)
      bottomArray.current[2] = bottomArray.current[3];
    bottomArray.current[3] = bottomArray.current[4];
    if (bottomArray.current[3] === 5) setHurdleIn3(true);
    bottomArray.current[4] = bottomArray.current[5];
    if (randomHurdle()) {
      bottomArray.current[5] = 5;
      hurdleOnStage.current = true;
    } else bottomArray.current[5] = 0;
  }

  function randomHurdle() {
    if (!hurdleOnStage.current && bottomArray.current[5] !== 5) {
      let randomChance = [false, true];
      return randomChance[Math.floor(Math.random() * randomChance.length)];
    }
    return false;
  }

  const context = {
    isJumping: jumpingOut,
    bottomRow: bottomArray.current,
    localPoints: stateCtx.currentLocalPoints
  };
  return (
    <InterpetedState.Provider value={context}>
      {children}
    </InterpetedState.Provider>
  );
}

const useInterpState = () => useContext(InterpetedState);

export { useInterpState };
