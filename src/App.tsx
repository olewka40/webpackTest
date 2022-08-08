import React from "react";
import "./styles";
import "./test.css";
import logo from "./images/pngImage.png";
import LogoSvg from "./images/svg.svg";

const App: React.FC<any> = () => {
  const handleClick = (e: any) => {
    alert("You Clicked Me!");
  };

  return (
    <div>
      <link href="./assets/fonts/Roboto-Bold.ttf" rel="stylesheet" />
      <h1>
        <img width="150" height="150" src={logo} alt="png" />
      </h1>
      <p>Реакт 18 0 2 приложение2</p>
      <button>
        <LogoSvg />
      </button>
      <button className="BigButton">
        <LogoSvg />
      </button>
    </div>
  );
};

export default App;
