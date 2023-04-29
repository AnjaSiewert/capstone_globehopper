import { render, screen } from "@testing-library/react";
import CounterContinent from ".";

test("renders a headline", () => {
  const countries = [{ name: "Canada" }];
  const countriesInfo = [{ name: "Canada", isVisited: true }];
  render(
    <CounterContinent countries={countries} countriesInfo={countriesInfo} />
  );
  const heading = screen.getByRole("heading", { name: /north america/i });
  expect(heading).toBeInTheDocument();
});

test("displays 7 progress bars (one per continent)", () => {
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

  render(
    <CounterContinent countries={countries} countriesInfo={countriesInfo} />
  );

  const progressBar = screen.getAllByTestId("progress-bar-continent");
  expect(progressBar).toHaveLength(7);
});
