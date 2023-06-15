import { useState, useEffect } from "react";
import { useMathProblem } from "../store/QuickMathsWrapper";

function AnswerRow() {
  const mathsCtx = useMathProblem();

  const [userNum, setUserNum] = useState([]);
  useEffect (() => {
    setUserNum(mathsCtx.answerValue);
  }, [mathsCtx.answerValue]);


  return (
      <tr>
        <td className="Quick-cell">Your answer:</td>
        <td className="Quick-cell">{userNum}</td>
        <td className="Quick-cell">Hit "Enter" to submit</td>
      </tr>
  );
}
export { AnswerRow };
