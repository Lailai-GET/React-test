import { HurdleRun } from "./components/Hurdlerun/Hurdlerun.js";
import { PersonalSpace } from "./components/Personalspace/Personalspace.js";
import { QuickMaths } from "./components/Quickmaths/Quickmaths.js";
import {Points} from "./store/Points.js"
import { useContext } from "react";

function App() {
  const pointsCtx = useContext(Points)
  return (
    <div className="App">
      <h1>Points: {pointsCtx.points}</h1>
      {/* bruk context provider til å legge til poeng fra alle spill */}
      <div className="GameBox">
        <HurdleRun text="enkelt spill som du styrer med spacebar"/>
        <PersonalSpace text="bruk piltaster for å flytte og skyte"/>
        <QuickMaths text="tall og enter for å løse matteoppgaver"/>
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
