import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Aysnc Component", () => {
  test("renders posts", async () => {
    render(<Async />);

    const listItemEls = await screen.findAllByRole("listitem");
    expect(listItemEls).not.toHaveLength(0);
  });
});
