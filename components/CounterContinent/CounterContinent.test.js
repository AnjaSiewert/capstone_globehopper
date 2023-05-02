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

test("displays 1 progress bar per continent", () => {
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

test("displays the correct number of total countries per continent", async () => {
  const countries = [
    { name: "Germany", region: "Europe" },
    { name: "France", region: "Europe" },
    { name: "Spain", region: "Europe" },
    { name: "Italy", region: "Europe" },
    { name: "United Kingdom", region: "Europe" },
    { name: "Poland", region: "Europe" },
  ];

  const countriesInfo = [
    { name: "Germany", isVisited: true },
    { name: "France", isVisited: true },
    { name: "Spain", isVisited: true },
    { name: "Italy", isVisited: true },
    { name: "United Kingdom", isVisited: true },
    { name: "Poland", isVisited: true },
  ];

  render(
    <CounterContinent countries={countries} countriesInfo={countriesInfo} />
  );

  const totalCountriesEurope = screen.getByText("0 / 6");
  expect(totalCountriesEurope).toBeInTheDocument();
});
