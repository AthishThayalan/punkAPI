import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerPagination from "./BeerPagination";
describe("BeerPagination component", () => {
  it("should render correctly", () => {
    const incrementPageMock = () => {};
    const decrementPageMock = () => {};

    render(
      <BeerPagination
        incrementPage={incrementPageMock}
        decrementPage={decrementPageMock}
      />
    );

    expect(screen.getByText("Previous Page")).toBeInTheDocument();
    expect(screen.getByText("Next Page")).toBeInTheDocument();
  });
  it("should call incrementPage when next button is clicked (A function should run on click)", async () => {
    let incrementCount = 0;

    const incrementPageMock = () => {
      incrementCount += 1;
    };
    const decrementPageMock = () => {};

    render(
      <BeerPagination
        incrementPage={incrementPageMock}
        decrementPage={decrementPageMock}
      />
    );

    const nextButton = screen.getByRole("button", { name: "Next Page" });
    await userEvent.click(nextButton);
    expect(incrementCount).toBe(1);
  });
  it("should call decrementPage when next button is clicked (a function should run on click)", async () => {
    let decrementCount = 1;

    const incrementPageMock = () => {
      decrementCount -= 1;
    };
    const decrementPageMock = () => {};

    render(
      <BeerPagination
        incrementPage={incrementPageMock}
        decrementPage={decrementPageMock}
      />
    );

    const nextButton = screen.getByRole("button", { name: "Next Page" });
    await userEvent.click(nextButton);
    expect(decrementCount).toBe(0);
  });
});
