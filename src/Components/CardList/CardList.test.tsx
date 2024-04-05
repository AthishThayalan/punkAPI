import React from "react";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";
import { Beer } from "../../Data/types";
import beersTest from "../../Data/beers-test";

it("should render 6 cards onload, without errors", () => {
  render(<CardList filteredBeers={beersTest} pageStart={0} pageEnd={6} />);

  const cards = screen.getAllByTestId("card");
  expect(cards.length).toBe(6);
});
