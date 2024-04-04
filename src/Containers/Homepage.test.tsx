import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Homepage";
import userEvent from "@testing-library/user-event";

describe("HomePage component", () => {
  it("should render correctly", () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );

    const headingElement = screen.getByText("Welcome to Brewdog Punk API");
    expect(headingElement).toBeInTheDocument();

    const textElement = screen.getByText(
      "Explore a wide range of Brewdog beers with just a click!"
    );
    expect(textElement).toBeInTheDocument();

    const buttonElement = screen.getByText("COME ON IN!");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should navigate to BeersPage route when button is clicked", () => {
    render(<HomePage />);
    const buttonElement = screen.getByText("COME ON IN!");
    userEvent.click(buttonElement);

    expect(window.location.href).toContain("/beers");
  });
});
