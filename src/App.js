import { useState } from "react";
import "./App.css";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState("red");
  const nextColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: isDisabled ? "gray" : color }}
        onClick={() => setColor(nextColor)}
        disabled={isDisabled}
      >
        Change to {nextColor}
      </button>
      <br />
      {/* Option:1  <label>
        <input
          type="checkbox"
          onClick={(e) => setIsDisabled((prev) => !prev)}
        />
        Disable button
      </label> */}

      <input
        type="checkbox"
        id="disable-button-checkbox"
        onClick={(e) => setIsDisabled((prev) => !prev)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
