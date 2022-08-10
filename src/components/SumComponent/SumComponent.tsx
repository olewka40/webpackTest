import React, { useState } from "react";
import { getSum } from "./utils";

export const SumComponent = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  import("./utils").then((math) => {
    console.log(math.getSum(16, 26));
  });

  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => {
          setFirstNumber(Number(e.target.value));
        }}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => {
          setSecondNumber(Number(e.target.value));
        }}
      />
      <div>Сумма: {getSum(firstNumber, secondNumber)}</div>
    </div>
  );
};
