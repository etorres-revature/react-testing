import { render, screen } from "@testing-library/react";
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

test("renders 'Great to be seeing you today...' as text", () => {
  render(<Greeting />);
  const greetingEl = screen.getByText("Great to be seeing you today...");
  expect(greetingEl).toBeInTheDocument();
});

// test();
