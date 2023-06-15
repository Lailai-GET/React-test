import { useState, useEffect } from "react";
import { useMathProblem } from "../store/QuickMathsWrapper";


function QuestionRow() {


  const questionCtx = useMathProblem();
  const [q1, setQ1] = useState(questionCtx.firstQValue);
  const [q2, setQ2] = useState(questionCtx.secondQValue);
  useEffect(()=>{
    setQ1(questionCtx.firstQValue);
    setQ2(questionCtx.secondQValue);
  }, [questionCtx.firstQValue, questionCtx.secondQValue]);

  return (
    <tr>
      <td className="Quick-cell">{q1}</td>
      <td className="Quick-cell">+</td>
      <td className="Quick-cell">{q2}</td>
    </tr>
  );
}
export { QuestionRow };
