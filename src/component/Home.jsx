import React from "react";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [string, setString] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setString(eval(string).toString());
      } catch (error) {
        setString("Error");
      }
    } 
    else if (value === "AC") {
      setString("");
    }  
    else if (value === "DEL") {
      setString(string.substring(0, string.length - 1));
    }
    else{
      if (value === "Error") {
        setString(value);
      }
      else{
        setString(string + value);
      }
    } 
  };
  
  return (
    <div className="body">
      <div className="calculator">
        <input type="text" placeholder="0" id="inputBox" value={string} readOnly />
        <div>
          <button className="operator" onClick={() => handleButtonClick("AC")}>AC</button>
          <button className="operator" onClick={() => handleButtonClick("DEL")}>DEL</button>
          <button className="operator" onClick={() => handleButtonClick("%")}>%</button>
          <button className="operator" onClick={() => handleButtonClick("/")}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="operator" onClick={() => handleButtonClick("*")}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button className="operator" onClick={() => handleButtonClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button className="operator" onClick={() => handleButtonClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("00")}>00</button>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button onClick={() => handleButtonClick(".")}>.</button>
          <button className="equal-btn" onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
