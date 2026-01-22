import { useState } from "react";
import "./App.css";
function App() {
  const [value, setValue] = useState("");
  const click = (t) => {
    if (t === "C") {
      setValue("");
    } 
    else if (t === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        alert("Error");
        setValue("");
      }
    } 
    else {
      setValue(value + t);
    }
  };
  return (
    <div className="full">
      <div className="con">
        <h1>Calculator</h1>
        <input type="text" value={value} readOnly />
        <div className="sub">
          {["+", "-", "*", "/"].map((op) => (
            <button key={op} className="b1" onClick={() => click(op)}>
              {op}
            </button>
          ))}
          {[1,2,3,4,5,6,7,8,9,0].map(n => (
            <button key={n} onClick={() => click(n.toString())}>
              {n}
            </button>
          ))}
          <button className="b2" onClick={() => click("C")}><b>C</b></button>
        </div>
        <div className="l">
          <button className="b3" onClick={() => click("=")}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
