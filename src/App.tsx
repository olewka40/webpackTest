import React from "react";
{
  /*import svg from "../assets/img/svg.svg";*/
}
{
  /*import png from "../assets/img/png.png";*/
}
import "./styles";

const App: React.FC<any> = () => {
  const handleClick = (e: any) => {
    alert("You Clicked Me!");
  };

  return (
    <div>
      <link href="../assets/fonts/Roboto-Bold.ttf" rel="stylesheet" />
      <link href="../assets/fonts/Roboto-Italic.ttf" rel="stylesheet" />
      <link href="../assets/fonts/Roboto-Regular.ttf" rel="stylesheet" />
      <h1>{/*<img width="150" height="150" src={png} alt="png" />*/}</h1>
      <p>Реакт 18 0 2 приложение2</p>
      <button>{/*<img src={svg} alt="home" />*/}</button>
    </div>
  );
};

export default App;
