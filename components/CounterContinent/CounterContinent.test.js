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
