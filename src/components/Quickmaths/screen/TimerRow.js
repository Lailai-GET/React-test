import { useState, useEffect } from "react";
import { useMathProblem } from "../store/QuickMathsWrapper";
import startImg from "../img/Start.png";
import correctImg from "../img/Correct.png";
import incorrectImg from "../img/Incorrect.png";
import outatimeImg from "../img/Outatime.png";

function TimerRow() {
  const mathsCtx = useMathProblem();
  const [lastAnswerState, setLastAnswerState] = useState(false);
  const [localPoints, setLocalPoints] = useState(0);
  const [ timerValue, setTimerValue ] = useState(1000);

  useEffect(() => {
    setLastAnswerState(mathsCtx.isCorrect);
  }, [mathsCtx.isCorrect]);

  useEffect(() => {
    setLocalPoints(mathsCtx.localPoints);
  }, [mathsCtx.localPoints]);
  
  useEffect(() => {
    setTimerValue(mathsCtx.timerValue);
  }, [mathsCtx.timerValue]);

  function imageHandler() {
    switch (lastAnswerState) {
      case "start":
        return startImg;
      case "correct":
        return correctImg;
      case "incorrect":
        return incorrectImg;
      case "outatime":
        return outatimeImg;
    }
  }

  return (
    <tr>
      <td className="Quick-cell">
        <img className="Quick-img" src={imageHandler()} />
      </td>
      <td className="Quick-cell">
        <label htmlFor="time-left" />
        <meter id="time-left" min="0" max="1000" value={timerValue}></meter>
      </td>
      <td className="Quick-cell">Points: {localPoints}</td>
    </tr>
  );
}

export { TimerRow };
