
import { useEffect, useState } from "react";
import { HurdleCell } from "./HurdleCell";
import {useInterpState} from "../store/InterpState"


function HurdleBottomRow() {
    const jumpCtx = useInterpState();
    const [jumping, setJumping] = useState(jumpCtx.isJumping);

    useEffect(()=>{
        setJumping(jumpCtx.isJumping);
    }, [jumpCtx.isJumping]);
    useEffect(()=>{
    }, [jumpCtx.isJumping])
  return (
    <tr>
      <HurdleCell state="1" />
      <HurdleCell state="2" />
      <HurdleCell state={jumping ? "0": "3"} />
      <HurdleCell state="5" />
      <HurdleCell state="6" />
      <HurdleCell state="7" />
    </tr>
  );
}

export {HurdleBottomRow};