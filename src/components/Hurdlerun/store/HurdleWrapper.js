import { createContext, useContext, useEffect, useState } from "react";
import { Keystroke } from "../../../controls/Keystroke";

const HurdleState = createContext({
  isJumping: false,
  jumpingReset: ()=>{},
});

export function HurdleWrapper({ children }) {
  const [jumping, setJumping] = useState(false);
  // const [jumpingOut, setJumpingOut] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleOutput();
  //   }, 3000);
  // }, []);

  // // useEffect(() => {
  // //   setJumpingOut(jumping);
  // // }, [jumping]);
 
  // function handleOutput() {//output til child skal ikke oppdateres før intervallen trigger
  //   console.log("top level handleOutput. 'jumping' is ", jumping);
  //   setJumpingOut(() => {
  //     const updatedValue = jumping;//den leser bare default value
  //     console.log("checking 'jumping', output should be ", updatedValue);
  //     return updatedValue;
  //   });
  // }

  const context = {
    isJumping: jumping,
    resetJump: handleJumpReset,
  };

  function handleKeyPress(e) {
    if (e.key === " ")
    //TODO - figure this shit out!
      setJumping(currentState => !currentState);
  }
  function handleJumpReset(){
    setJumping((currentState) =>{
      console.log("handleReset 'jumping' ", jumping)
      if(currentState) return false;
    })
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
