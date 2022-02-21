// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import './App.css';

import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

import LandingPage from './components/LandingPage';
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const helloArray = [
  {
    name: "Declarative",
    description: "React makes it painless to create interactive UIs",
    image: icon1

  },
  {
    name: "Components",
    description: "Build excapsulated components that manage their state",
    image: icon2
  },
  {
    name: "Single-Way",
    description: "A set of immutable values are passed to the component's",
    image: icon3
  },
  {
    name: "JSX",
    description: "Statically-typed, designed to run on mpdern browsers.",
    image: icon4
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" id="to-left"/>
        <img src={menu} alt="Menu" id="to-right"/>
        
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the most popular fronted library,
        and become a super Ninja developer</p>

        <button className="btn yellow">Awesome!</button>   
      </header>
      
      <article className="container">
        <LandingPage hello={ helloArray[0] }/>
        <LandingPage hello={ helloArray[1] }/>
        <LandingPage hello={ helloArray[2] }/>
        <LandingPage hello={ helloArray[3] }/>
      </article>
    </div>
  );
}
export default App;
