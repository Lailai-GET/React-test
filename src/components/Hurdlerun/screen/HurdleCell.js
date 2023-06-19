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

  const placeholderState = props.state;

  function imageHandler() {
        return  pictures[parseInt(placeholderState)];

  }

  return <td className="Hurdle-cell"><img className="Hurdle-img" src={imageHandler()}/></td>;
}

export { HurdleCell };