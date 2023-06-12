import { useState, useContext, createContext } from "react";
import {Points} from "./Points";

const MathProblem = createContext({
  localPoints: 0,
  isCorrect: false,
  firstQ: (num) => {},
  secondQ: (num) => {},
  answer: (userNum) =>{},
  calculate: () =>{}
});
export function QuickMathsWrapper(props) {
  const [localPoints, setLocalPoints] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [firstQ, setFirstQ] = useState(5);
  const [secondQ, setSecondQ] = useState(8);
  const [answer, setAnswer] = useState(0);
  const pointsCtx = useContext(Points);

  const context = {
    localPoints: localPoints,
    isCorrect: isCorrect,
    firstQ: firstQHandler,
    secondQ: secondQHandler,
    answer: answerHandler,
    calculate: calculationHandler,
  };

  function firstQHandler(num){
    setFirstQ(firstQ >= 0 ?? num)
  }
  function secondQHandler(num){
    setSecondQ(secondQ >= 0 ?? num)
  }
  function answerHandler(userNum){
    setAnswer(answer >= 0 ?? userNum)
  }
  function calculationHandler(){
    if(answer === firstQ + secondQ) {
        addPointHandler();
        setIsCorrect((isCorrect === true || isCorrect === false) ?? true)
    }
    else {
        resetPointsHandler();
        setIsCorrect((isCorrect === true || isCorrect === false) ?? false)
    }
  }
  function addPointHandler() {
    setLocalPoints(localPoints + 1);
    pointsCtx.addPoint();
  }
  function resetPointsHandler() {
    setLocalPoints(localPoints >= 1 ?? 0);
    pointsCtx.resetPoints();
  }

  return (
    <MathProblem.Provider value={context}>
      {props.children}
    </MathProblem.Provider>
  );
}
export{MathProblem}