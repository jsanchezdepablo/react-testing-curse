import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App, {
  replaceCamelBySpaces,
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "./App";

const renderSus = () => render(<App />);

test("button has correct initial color (primaryColor)", () => {
  /* const { container } =  */ renderSus();

  //   logRoles(container);
  //find adn element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", { name: "change-color-button" });

  //expect the background color to be red
  expect(button).toHaveStyle({ "background-color": primaryColor });
});

test("button turns secondaryColor when clicked", () => {
  renderSus();

  const button = screen.getByRole("button", { name: "change-color-button" });

  fireEvent.click(button);

  expect(button).toHaveTextContent(
    `Change to ${replaceCamelBySpaces(primaryColor)}`
  );
});

test("Button should be enabled (initial condition)", () => {
  renderSus();

  //check that the button starts out enabled
  const button = screen.getByRole("button", { name: "change-color-button" });
  expect(button).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkboxButton = screen.getByRole("checkbox");
  expect(checkboxButton).not.toBeChecked();
});

test("Button should be disabled", () => {
  renderSus();

  const button = screen.getByRole("button", { name: "change-color-button" });
  const checkboxButton = screen.getByRole("checkbox", {
    name: "Disable button",
  });

  //check for first time
  fireEvent.click(checkboxButton);
  expect(checkboxButton).toBeChecked();
  expect(button).toBeDisabled();

  //check for second time
  fireEvent.click(checkboxButton);
  expect(checkboxButton).not.toBeChecked();
  expect(button).toBeEnabled();
});

test("Button should change to every colors", () => {
  renderSus();
  const colorButton = screen.getByRole("button", {
    name: "change-color-button",
  });
  const checkboxButton = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  expect(colorButton).toHaveTextContent(
    `Change to ${replaceCamelBySpaces(secondaryColor)}`
  );
  expect(colorButton).toHaveStyle({ "background-color": primaryColor });

  //disable button and change to color gray
  expect(checkboxButton).not.toBeChecked();
  fireEvent.click(checkboxButton);
  expect(checkboxButton).toBeChecked();
  expect(colorButton).toHaveStyle({ "background-color": tertiaryColor });

  //enable button and restore red initial color
  fireEvent.click(checkboxButton);
  expect(checkboxButton).not.toBeChecked();
  expect(colorButton).toHaveStyle({ "background-color": primaryColor });

  //change to blue
  expect(colorButton).toBeEnabled();
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": secondaryColor });
});

describe("Spaces before camelCase capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelBySpaces("Red")).toBe("Red");
  });
  test("Works foro one inner capital letters", () => {
    expect(replaceCamelBySpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works foro multiple inner capital letters", () => {
    expect(replaceCamelBySpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
