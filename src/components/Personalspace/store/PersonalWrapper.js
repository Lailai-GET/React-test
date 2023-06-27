import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Points } from "../../../store/Points";
import { Keystroke } from "../../../controls/Keystroke";

const PersonalStore = createContext({
  screenCells: [],
  localPoints: 0,
});

export function PresonalWrapper({ children }) {
  const pointsCtx = useContext(Points);
  const [count, setCount] = useState(0);
  const [shipState, setShipState] = useState(3);
  const shipApperance = useRef(3);
  const shipPos = useRef(0);
  const [shipDirection, setShipDirection] = useState(0);
  const shipVelocity = useRef(0);
  const screenRef = useRef(generateFirstArray());

  useEffect(() => {
    const progression = setInterval(handleProgression, 1000);

    return () => clearInterval(progression);
  }, []);
  useEffect(() => {
    shipApperance.current = shipState;
  }, [shipState]);
  useEffect(() => {
    shipVelocity.current = shipDirection;
  }, [shipDirection]);

  function handleProgression() {
    handleShipPos();
    handleShipState();
    //handleAlienShoot();
    //handleShotDirection();
    //handleSplotion();
  }
  function handleShipState() {
    shipApperance.current === 3 ? setShipState(4) : setShipState(3);
  }
  function handleShipPos() {
    switch (shipVelocity.current) {
      case 0:
        break;
      case 1:
        shipPos.current =
          shipPos.current === 0
            ? shipPos.current
            : shipApperance.current !== 5
            ? shipPos.current - 1
            : shipPos.current;
        break;
      case 2:
        shipPos.current =
          shipPos.current === 5
            ? shipPos.current
            : shipApperance.current !== 5
            ? shipPos.current + 1
            : shipPos.current;
        break;
    }
    setShipDirection(0);
    for (let i = 0; i < screenRef.current.length; i++) {
      for (let j = 0; j < screenRef.current[i].length; j++) {
        if (i === 3 && j === shipPos.current) {
          screenRef.current[i][j] = shipApperance.current;
        } else if (i === 3) screenRef.current[i][j] = 0;
      }
    }
  }

  function addPointHandler() {
    pointsCtx.addPoint();
    setCount(count + 1);
  }
  function resetPointsHandler() {
    pointsCtx.resetPoints();
    setCount(0);
  }

  const handleKeyPress = (e) => {
    //temp placeholder
    if (e.key === "w" || e.key === "ArrowUp") {
      setShipState(5);
    }
    if (e.key === "a" || e.key === "ArrowLeft") {
      setShipDirection(1);
    }
    if (e.key === "d" || e.key === "ArrowRight") {
      setShipDirection(2);
    }
  };

  function generateFirstArray() {
    let generatedArray = [];
    for (let i = 0; i < 4; i++) {
      generatedArray[i] = [];
      for (let j = 0; j < 6; j++) {
        if (i < 1) {
          generatedArray[i][j] = 1;
        } else if (i === 3 && j === shipPos.current) {
          generatedArray[i][j] = shipApperance.current;
        } else generatedArray[i][j] = 0;
      }
    }
    return generatedArray;
  }
  const context = { screenCells: screenRef.current, localPoints: count };

  return (
    <PersonalStore.Provider value={context}>
      <Keystroke keyPress={handleKeyPress} />
      <div className="MiniPlayer">{children}</div>
    </PersonalStore.Provider>
  );
}
const usePersonalStore = () => useContext(PersonalStore);

export { usePersonalStore };
