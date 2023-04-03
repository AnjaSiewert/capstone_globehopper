import { render, screen } from "@testing-library/react";
import CountriesList from "./CountriesList";

const testData = [
  {
    name: "Afghanistan",
  },
];

test("renders a list of countries", () => {
  render(<CountriesList countries={testData} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
