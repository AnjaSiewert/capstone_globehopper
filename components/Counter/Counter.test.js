import { render, screen } from "@testing-library/react";
import Counter from ".";

test("renders a headline", () => {
  const countries = [{ name: "Canada" }];
  const countriesInfo = [{ name: "Canada", isVisited: true }];
  render(<Counter countries={countries} countriesInfo={countriesInfo} />);
  const heading = screen.getByRole("heading", { name: /the world/i });
  expect(heading).toBeInTheDocument();
});

test("displays the correct number of visited countries", async () => {
  const countries = [
    { name: "Canada" },
    { name: "United States" },
    { name: "Mexico" },
  ];
  const countriesInfo = [
    { name: "Canada", isVisited: true },
    { name: "United States", isVisited: false },
    { name: "Mexico", isVisited: true },
  ];

  render(<Counter countries={countries} countriesInfo={countriesInfo} />);

  const visitedCountries = screen.getByText("2 /3");
  expect(visitedCountries).toBeInTheDocument();
});
