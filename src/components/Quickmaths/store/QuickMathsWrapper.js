import { useState, useContext, createContext, useEffect } from "react";
import { Points } from "../../../store/Points";
import { Keystroke } from "../../../controls/Keystroke";

const MathProblem = createContext({
  localPoints: 0,
  firstQValue: 5,
  secondQValue: 8,
  answerValue: 0,
  isCorrect: "start",
  timerValue: 0,
});

export function QuickMathsWrapper({ children }) {
  const [localPoints, setLocalPoints] = useState(0);
  const [isCorrect, setIsCorrect] = useState("start");
  const [firstQ, setFirstQ] = useState(randomNum());
  const [secondQ, setSecondQ] = useState(randomNum());
  const [answer, setAnswer] = useState([]);
  const [timerValue, setTimerValue] = useState(500);

  const pointsCtx = useContext(Points);

  
  useEffect(() => {
    increment()
  }, []);
  
  function increment() {
    console.log("trigger warning");
    setTimerValue(timerValue - 50);
    setTimeout(() => {
      increment();
    }, 500);
    if (timerValue <= 0) {
      timesUp();
      return;
    }
  };

  const context = {
    localPoints: localPoints,
    isCorrect: isCorrect,
    answerValue: answer,
    firstQValue: firstQ,
    secondQValue: secondQ,
    timerValue: timerValue,
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      let submission = answer.join("");
      calculationHandler(submission);
      setAnswer([]);
    } else if (/^[0-9]*$/.test(e.key)) {
      setAnswer(() => {
        const tempArray = answer.map((num) => {
          return num;
        });
        tempArray.push(e.key);
        return tempArray;
      });
    } else if (e.key === "Backspace") {
      setAnswer(() => {
        const tempArray = answer.map((num) => {
          return num;
        });
        tempArray.pop();
        return tempArray;
      });
    }
  };

  
  function newQuestion() {
    setTimerValue(1000);
    firstQHandler();
    secondQHandler();
  }
  
  function randomNum() {
    return Math.floor(Math.random() * 8) + 1;
  }
  
  function firstQHandler() {
    setFirstQ(randomNum());
  }
  function secondQHandler() {
    setSecondQ(randomNum());
  }
  function calculationHandler(submittedAnswer) {
    if (submittedAnswer == firstQ + secondQ) {
      setIsCorrect("correct");
      addPointHandler();
    } else {
      setIsCorrect("incorrect");
      resetPointsHandler();
    }
    newQuestion();
  }
  function addPointHandler() {
    setLocalPoints(localPoints + 1);
    pointsCtx.addPoint();
  }
  function resetPointsHandler() {
    setLocalPoints(0);
    pointsCtx.resetPoints();
  }
  function timesUp() {
    setIsCorrect("outatime");
    resetPointsHandler();
    newQuestion();
  }

  return (
    <MathProblem.Provider value={context}>
      <Keystroke keyPress={handleKeyPress} />
      {children}
    </MathProblem.Provider>
  );
}

const useMathProblem = () => useContext(MathProblem);

export { useMathProblem };
