import { HurdleRun } from "./components/Hurdlerun/Hurdlerun.js";
import { PersonalSpace } from "./components/Personalspace/Personalspace.js";
import { QuickMaths } from "./components/Quickmaths/Quickmaths.js";
import { Points } from "./store/Points.js";
import { useContext } from "react";

function App() {
  const pointsCtx = useContext(Points);

  return (
    <div className="App">
      <h1>Points: {pointsCtx.points}</h1>
      {/* bruk context provider til å legge til poeng fra alle spill */}
      <div className="GameBox">
        <HurdleRun />
        <PersonalSpace />
        <QuickMaths />
      </div>
      <div className="Instructions">
        <p className="Instruction-box">press space when hurdle is in front of the runner</p>
        <p className="Instruction-box">left: a/←, right: d/→, shoot: w/↑</p>
        <p className="Instruction-box">
          press a number to write it, enter to submit, backspace to remove
          number. Answer within the time limit
        </p>
      </div>
    </div>
  );
}
export default App;

// import logo from './logo.svg';
// import './App.css';
// import spiral from './spiral.png';
// import {useState} from 'react';

// function MyButton() {
//   const [count, setCount] = useState(0)
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={spiral} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>
//         <MyButton />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
