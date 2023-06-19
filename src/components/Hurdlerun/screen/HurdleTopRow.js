
import { useEffect, useState } from "react";
import { HurdleCell } from "./HurdleCell";
import { useHurdleState } from "../store/HurdleWrapper";

function HurdleTopRow() {
    const jumpCtx = useHurdleState();
    const [jumping, setJumping] = useState(jumpCtx.isJumping)

    useEffect(()=>{
        setJumping(jumpCtx.isJumping);
        console.log("is it even change? ", jumpCtx.isJumping)
    }, [jumpCtx.isJumping]);
    useEffect(()=>{
        console.log("child component useContext useEffect: ",jumpCtx.intervalTester)
    }, [jumpCtx.intervalTester])

  return (
    <tr>
      <HurdleCell state="0" />
      <HurdleCell state="0" />
      <HurdleCell state={jumping ? "4" : "0"} />
      <HurdleCell state="0" />
      <HurdleCell state="0" />
      <HurdleCell state="0" />
    </tr>
  );
}

export {HurdleTopRow}
