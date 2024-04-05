import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { Beer } from "../../Data/types";
import beersTest from "../../Data/beers-test";

const noBeers: Beer[] = [];

describe("CardList component", () => {
  it("should render 6 cards onload, without errors", () => {
    render(<CardList filteredBeers={beersTest} pageStart={0} pageEnd={6} />);

    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(6);
  });

  it("should render 'No beers available . . .' text when there are no filtered beers", () => {
    render(<CardList filteredBeers={noBeers} pageStart={0} pageEnd={6} />);

    const noBeersText = screen.getByText("No beers available . . .");
    expect(noBeersText).toBeInTheDocument();
  });
});
