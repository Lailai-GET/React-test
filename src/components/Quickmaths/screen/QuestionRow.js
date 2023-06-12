import { useState, useContext, createContext } from "react";
import { MathProblem } from "../../../store/QuickMathsWrapper";

const Restart = createContext({});

function QuestionRow(props) {
  const QuestionCtx = useContext(MathProblem);
  const [q1, setQ1] = useState(5);
  const [q2, setQ2] = useState(3);

  function randomNum() {
    return Math.floor(Math.random() * 8) + 1;
  }
  function q1Handler() {
    setQ1(q1 >= 0 ?? randomNum());
    QuestionCtx.firstQ(q1);
  }
  function q2Handler() {
    setQ2(q2 >= 0 ?? randomNum());
    QuestionCtx.secondQ(q2);
  }
  function newQuestion() {
    q1Handler();
    q2Handler();
  }
  const context = {
    nextQuestion: newQuestion,
  };
  return (
    <Restart.Provider value="context">
      <tr>
        <td className="Quick-cell">{q1}</td>
        <td className="Quick-cell">+</td>
        <td className="Quick-cell">{q2}</td>
      </tr>
      {props.children}
    </Restart.Provider>
  );
}
export { QuestionRow };
export {Restart};
