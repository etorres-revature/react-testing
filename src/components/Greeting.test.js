import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

test("renders 'Hello World' as a text", () => {
  //Arrange
  render(<Greeting />);

  //Act
  // ...nothing

  //Assert
  const helloWorldEl = screen.getByText("Hello World!!");
  expect(helloWorldEl).toBeInTheDocument();
});

test("renders 'Great to be seeing you today...' if button was NOT clicked", () => {
  render(<Greeting />);
  const greetingEl = screen.getByText("Great to be seeing you today...");
  expect(greetingEl).toBeInTheDocument();
});

test("renders 'Changed!' if the button WAS clicked", () => {
  //Arrange
  render(<Greeting />);

  //Act
  const buttonEl = screen.getByRole("button");
  userEvent.click(buttonEl);

  //Assert
  const changedEl = screen.getByText("Changed!");
  expect(changedEl).toBeInTheDocument();
});

test("does not render 'good to see you' if button was clicked", () => {
  //Arrange
  render(<Greeting />);

  //Act
  const buttonEl = screen.getByRole("button");
  userEvent.click(buttonEl);

  //Assert
  const changedEl = screen.queryByText("good to see you", { exact: false });
  expect(changedEl).toBeNull();
});
