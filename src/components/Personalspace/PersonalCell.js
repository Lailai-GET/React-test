import  Empty  from "./img/Empty.png";
import  Alien  from "./img/Alien.png";
import  AlienShoot  from "./img/AlienShoot.png";
import  Ship1  from "./img/Ship1.png";
import  Ship2  from "./img/Ship2.png";
import  ShipShoot  from "./img/ShipShoot.png";
import  ShotAlien  from "./img/ShotAlien.png";
import  ShotBoth  from "./img/ShotBoth.png";
import  ShotShip  from "./img/ShotShip.png";
import  Splotion  from "./img/Splotion.png";

function PersonalCell(props) {
  function handleImageState(state) {
    switch (state) {
      case 0:
        return Empty;
      case 1:
        return Alien;
      case 2:
        return AlienShoot;
      case 3:
        return Ship1;
      case 4:
        return Ship2;
      case 5:
        return ShipShoot;
      case 6:
        return ShotAlien;
      case 7:
        return ShotBoth;
      case 8:
        return ShotShip;
      case 9:
        return Splotion;
      default:
        return Empty;
    }
  }

  return (
    <div className="Space-cell">
        {<img className="Space-img" src={handleImageState(props.img)}/>}
    </div>
  )
}

export {PersonalCell};
