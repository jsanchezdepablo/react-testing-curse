import { useState } from "react";
import "./App.css";

export const replaceCamelBySpaces = (color) => {
  return color.replace(/\B([A-Z])\B/g, " $1");
  //si encuentra una letra mayúscula en el medio
  //de una palabra, la reemplazará por un espacio
  //seguida de la letra que vaya después
};

export const primaryColor = "MediumVioletRed"; //before red
export const secondaryColor = "MediumTurquoise"; //before blue
export const tertiaryColor = "MediumVioletRed"; //before gray

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [color, setColor] = useState(primaryColor);
  const nextColor = color === primaryColor ? secondaryColor : primaryColor;

  return (
    <div>
      <button
        aria-label="change-color-button"
        style={{ backgroundColor: isDisabled ? tertiaryColor : color }}
        onClick={() => setColor(nextColor)}
        disabled={isDisabled}
      >
        Change to {replaceCamelBySpaces(nextColor)}
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
