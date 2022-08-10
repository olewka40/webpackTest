import React, { lazy, useState } from "react";
import "./styles.css";
import "./test.css";
import logo from "assets/images/home.png";
import LogoSvg from "assets/images/svg.svg";
import { Suspense } from "react";

const SumComponent = lazy(() =>
  import("components/SumComponent").then(({ SumComponent }) => ({
    default: SumComponent,
  }))
);
const App: React.FC<any> = () => {
  const [isCalcOn, setIsCalcOn] = useState<boolean>(false);
  const handleClick = () => {
    alert("Click!!!");
  };
  const turnOff = () => {
    setIsCalcOn(false);
  };
  const turnOn = () => {
    setIsCalcOn(true);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <LogoSvg />
      </button>
      <img width="150" height="150" src={logo} alt="png" />
      <h1>Реакт 18 0 2</h1>

      <button onClick={turnOn} className="BigButton">
        Включить калькулятор
      </button>
      <button onClick={turnOff} className="BigButton">
        Выключить калькулятор
      </button>
      {isCalcOn && (
        <Suspense fallback={<div>Loading...</div>}>
          <SumComponent />
        </Suspense>
      )}
    </div>
  );
};

export default App;
