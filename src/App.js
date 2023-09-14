import { useState } from "react";
import "./App.css";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState("red");
  const nextColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(nextColor)}
        disabled={isDisabled}
      >
        Change to {nextColor}
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          onClick={(e) => setIsDisabled((prev) => !prev)}
        />
        Deshabilita el botón de arriba
      </label>
    </div>
  );
}

export default App;
