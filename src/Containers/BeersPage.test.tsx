import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import BeersPage from "./BeersPage";

describe("BeersPage component", () => {
  it("should render correctly", () => {
    render(
      <Router>
        <BeersPage />
      </Router>
    );

    expect(screen.getByText("BREWDOG")).toBeInTheDocument();
    expect(screen.getByText("Next Page")).toBeInTheDocument();
    expect(screen.getByText("Previous Page")).toBeInTheDocument();
    expect(screen.getByText("Punk API")).toBeInTheDocument();
  });
  it("should render Main and Navbar components correctly", () => {
    render(
      <Router>
        <BeersPage />
      </Router>
    );
    expect(screen.getByTestId("main-component")).toBeInTheDocument();

    expect(screen.getByTestId("navbar-component")).toBeInTheDocument();
  });
});
