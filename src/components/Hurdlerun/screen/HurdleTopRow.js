
import { useEffect, useState } from "react";
import { HurdleCell } from "./HurdleCell";
import { useInterpState } from "../store/InterpState";


function HurdleTopRow() {
    const jumpCtx = useInterpState();
    const [jumping, setJumping] = useState(jumpCtx.isJumping)

    useEffect(()=>{
        setJumping(jumpCtx.isJumping);
        console.log("is it even change? ", jumpCtx.isJumping)
    }, [jumpCtx.isJumping]);
    useEffect(()=>{
    }, [jumpCtx.isJumping])

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
