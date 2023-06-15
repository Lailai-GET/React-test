import { useState, useEffect } from "react";
import { useMathProblem } from "../store/QuickMathsWrapper";
import correctImg from "../img/Correct.png";
import incorrectImg from "../img/Incorrect.png";

function TimerRow() {
  const mathsCtx = useMathProblem();
  const [lastAnswerState, setLastAnswerState] = useState(false);
  const [localPoints, setLocalPoints] = useState(0);

  useEffect(() => {
    setLastAnswerState(mathsCtx.isCorrect);
  }, [mathsCtx.isCorrect]);

  useEffect(() => {
    setLocalPoints(mathsCtx.localPoints);
    setTimerValue(1000);
  }, [mathsCtx.localPoints]);

  const [timerValue, setTimerValue] = useState(1000);

  useEffect(() => {
    timerFunction();
    console.log("value: ", timerValue);
  }, [timerValue]);
  
  function timerFunction() {
    setTimeout(() => {
      setTimerValue(timerValue - 100);
    }, 500);
  }

  function imageHandler() {
    switch (lastAnswerState) {
      case true:
        return correctImg;
      default:
        return incorrectImg;
    }
  }

  return (
    <tr>
      <td className="Quick-cell">
        <img className="Quick-img" src={imageHandler()} />
      </td>
      <td className="Quick-cell">
        <label for="time-left" />
        <meter id="time-left" min="0" max="1000" value={timerValue}></meter>
      </td>
      <td className="Quick-cell">Points: {localPoints}</td>
    </tr>
  );
}

export { TimerRow };
