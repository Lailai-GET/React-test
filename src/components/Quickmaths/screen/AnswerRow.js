import { useState, useContext } from "react";
import { Restart } from "./QuestionRow";
import { MathProblem } from "../../../store/QuickMathsWrapper";

function AnswerRow() {
  const [userNum, setUserNum] = useState(0);
  const mathsCtx = useContext(MathProblem);
  const newQuestion = useContext(Restart);

  function inputHandler(event) {
    if (event.key === "Enter") console.log("great sucess");
  }
  return (
    <div>
      <input type="text" value="trykk enter" onKeyDown={inputHandler} />
    </div>
  );
}
export { AnswerRow };
