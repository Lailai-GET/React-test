import empty from "../img/Empty.png";
import run1 from "../img/Run1.png";
import run2 from "../img/Run2.png";
import run3 from "../img/Run3.png";
import jump from "../img/Jump.png";
import hurdle from "../img/Hurdle.png";
import hurdleDown from "../img/HurdleDown.png";
import trip from "../img/Trip.png";

function HurdleCell(props) {
  const pictures = [empty, run1, run2, run3, jump, hurdle, hurdleDown, trip];

  const currentState = props.state;

  function imageHandler() {
        return  pictures[parseInt(currentState)];

  }

  return <td className="Hurdle-cell">{props.state <= 9 ? <img className="Hurdle-img" src={imageHandler()}/> : <div>Points: {props.points}</div>}</td>;
}

export { HurdleCell };