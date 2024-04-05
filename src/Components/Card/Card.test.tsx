import { render, screen, waitFor } from "@testing-library/react";
import Card from "./Card";
import beersTest from "../../Data/beers-test";
import userEvent from "@testing-library/user-event";

const mockBeer = beersTest[0];
let truncatedDescription =
  mockBeer.description.length > 450
    ? mockBeer.description.substring(0, 450) + "..."
    : mockBeer.description;

describe("Card Component", () => {
  it("should render beer name, tagline, and truncated description", () => {
    render(
      <Card
        id={mockBeer.id}
        name={mockBeer.name}
        img={mockBeer.image_url}
        tagline={mockBeer.tagline}
        description={truncatedDescription}
      />
    );

    expect(screen.getByText(mockBeer.name)).toBeInTheDocument();
    expect(screen.getByText(mockBeer.tagline)).toBeInTheDocument();
    expect(screen.getByText(truncatedDescription)).toBeInTheDocument();
  });

  it("should open modal when clicked", async () => {
    render(
      <>
        <Card
          id={mockBeer.id}
          name={mockBeer.name}
          img={mockBeer.image_url}
          tagline={mockBeer.tagline}
          description={mockBeer.description}
        />
      </>
    );

    const cardElement = screen.getByTestId("card");
    userEvent.click(cardElement);

    await waitFor(() => {
      expect(screen.getByTestId("modal")).toBeInTheDocument();
    });
  });
});
