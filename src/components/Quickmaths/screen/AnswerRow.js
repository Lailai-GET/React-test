import { useState, useContext } from "react";
import { Restart } from "./QuestionRow";
import { MathProblem } from "../../../store/QuickMathsWrapper";
import { Keystroke } from "../../../controls/Keystroke";

function AnswerRow() {
  const [userNum, setUserNum] = useState(0);
  const mathsCtx = useContext(MathProblem);
  const newQuestion = useContext(Restart);

  const handleKeyPress = (e) => {
    if(e.key === "q")console.log("Quick Triggered");
  };
  

  return (
    <div>
      <Keystroke keyPress={handleKeyPress} />
    </div>
  );
}
export { AnswerRow };
