import React from "react";
import "./Calc.css";
import { useState } from "react";

// 1. Group the buttons into rows to map over them
const btnRows = [
  ["AC", "DEL", "%", "/"],
  ["7", "8", "9", "*"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["00", "0", ".", "="],
];

// 2. Create a separate component for the buttons to handle their own styling
const Button = ({ value, onClick }) => {
  const getClassName = (val) => {
    if (val === "=") return "equal-btn";
    if (["AC", "DEL", "%", "/", "*", "-", "+"].includes(val)) return "operator";
    return "";
  };

  return (
    <button className={getClassName(value)} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

const Home = () => {
  const [string, setString] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        if (!string) return;
        // eslint-disable-next-line no-eval
        const result = eval(string);
        if (!isFinite(result) || isNaN(result)) throw new Error();
        setString(result.toString());
      } catch {
        setString("Error");
      }
    } else if (value === "AC") {
      setString("");
    } else if (value === "DEL") {
      setString(string === "Error" ? "" : string.slice(0, -1));
    } else {
      setString(string === "Error" ? value : string + value);
    }
  };

  return (
    <div className="body">
      <div className="calculator">
        <input type="text" placeholder="0" id="inputBox" value={string} readOnly />
        
        {/* 3. Dynamically render the rows and buttons */}
        {btnRows.map((row, i) => (
          <div key={i}>
            {row.map((val) => (
              <Button key={val} value={val} onClick={handleButtonClick} />
            ))}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Home;