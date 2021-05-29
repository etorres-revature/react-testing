import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Aysnc Component", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });

    render(<Async />);

    const listItemEls = await screen.findAllByRole("listitem");
    expect(listItemEls).not.toHaveLength(0);
  });
});
