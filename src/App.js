import React, { useState } from 'react';
import './App.css';

function CalcuButton({ label, onClick, buttonClassName = "CalcuButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcuDisplay({ Display }) {
  return (
    <div className="CalcuDisplay">
      {Display}
    </div>
  );
}

export default function App() {
  const [Display, setDisp] = useState("0");
  const [expression, setExpression] = useState("");
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleButtonClick = (value) => {
    if (resetDisplay) {
      setExpression("");
      setResetDisplay(false);
    }

    setExpression((prevExpression) => prevExpression + value);
    setDisp((prevDisplay) => (prevDisplay === "0" ? value : prevDisplay + value));
  };
 // Function to handle the clear button click
  const clearClickHandler = (e) => {
    e.preventDefault();
    setDisp("0");
    setExpression("");
    setResetDisplay(false);
  };
 // Function to handle the equal button click
  const equalClickHandler = (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-eval
      const result = eval(expression);
      setDisp(result.toString());
      setExpression(result.toString());
      setResetDisplay(true);
    } catch (error) {
      setDisp("ERROR");
      setExpression("");
      setResetDisplay(false);
    }
  };
 // Function to handle the display to "Miranda"
  const nameClickHandler = (e) => {
    e.preventDefault();
    setDisp("Jovell Chrsitian Q. Miranda"); // Updated to Full Name
  };
  const handleSignChange = () => {
    if (Display !== "0") {
      setDisp(prevDisplay => {
        if (prevDisplay[0] === "-") {
          return prevDisplay.slice(1);
        } else {
          return `-${prevDisplay}`;
        }
      });
    }
  };
  
  const percentClickHandler = () => {
    if (Display !== "0") {
      const value = (parseFloat(Display) / 100).toString();
      setDisp(value);
    }
  };
  
  

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>Calculator of Jovell Christian Q. Miranda - IT3A</h1>
        <CalcuDisplay Display={Display} />
        <div className="ButtonContainer">
          <CalcuButton label={7} onClick={() => handleButtonClick("7")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={8} onClick={() => handleButtonClick("8")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={9} onClick={() => handleButtonClick("9")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={"+"} onClick={() => handleButtonClick("+")} buttonClassName={"OperatorButton"} />
          <CalcuButton label={4} onClick={() => handleButtonClick("4")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={5} onClick={() => handleButtonClick("5")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={6} onClick={() => handleButtonClick("6")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={"-"} onClick={() => handleButtonClick("-")} buttonClassName={"OperatorButton"} />
          <CalcuButton label={1} onClick={() => handleButtonClick("1")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={2} onClick={() => handleButtonClick("2")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={3} onClick={() => handleButtonClick("3")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={"*"} onClick={() => handleButtonClick("*")} buttonClassName={"OperatorButton"} />
          <CalcuButton label={"C"} onClick={clearClickHandler} buttonClassName={"OperatorButton"} />
          <CalcuButton label={"0"} onClick={() => handleButtonClick("0")} buttonClassName={"CalcuButtonNum"} />
          <CalcuButton label={"="} onClick={equalClickHandler} buttonClassName={"EqualsButton"} />
          <CalcuButton label={"/"} onClick={() => handleButtonClick("/")} buttonClassName={"OperatorButton"} />
          <CalcuButton label={"+/-"} onClick={() => handleSignChange("+/-")} buttonClassName={"OperatorButton"} />
          <CalcuButton label="%" onClick={() => percentClickHandler("%")} buttonClassName={"OperatorButton"} />

        </div>
        <div className="NameButton">
          <CalcuButton label={"Miranda"} onClick={nameClickHandler} buttonClassName={"CalcuButtonName"} />
        </div>
      </div>
    </div>
  );
}
