import { render, screen, fireEvent } from "@testing-library/react";
// import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  /* const { container } =  */ render(<App />);

  //   logRoles(container);
  //find adn element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(button).toHaveStyle({ "background-color": "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(button);

  expect(button).toHaveTextContent("Change to red");
});

test("Button should be enabled (inital condition)", () => {
  render(<App />);

  //check that the button starts out enabled
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkboxButton = screen.getByRole("checkbox");
  expect(checkboxButton).not.toBeChecked();
});

test("Button should be disabled", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkboxButton = screen.getByRole("checkbox");

  //check for first time
  fireEvent.click(checkboxButton);
  expect(checkboxButton).toBeChecked();
  expect(button).toBeDisabled();

  //check for second time
  fireEvent.click(checkboxButton);
  expect(checkboxButton).not.toBeChecked();
  expect(button).toBeEnabled();
});
