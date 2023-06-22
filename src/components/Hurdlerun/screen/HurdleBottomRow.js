import { useEffect, useState } from "react";
import { HurdleCell } from "./HurdleCell";
import { useInterpState } from "../store/InterpState";

function HurdleBottomRow() {
  const inputCtx = useInterpState();
  const [jumping, setJumping] = useState(inputCtx.isJumping);

  useEffect(() => {
    setJumping(inputCtx.isJumping);
  }, [inputCtx.isJumping]);
  useEffect(() => {}, [inputCtx.isJumping]);

  return (
    <tr>
      {inputCtx.bottomRow.map((stateData) => (
        <HurdleCell state={stateData} />
      ))}
    </tr>
  );
}

export { HurdleBottomRow };
