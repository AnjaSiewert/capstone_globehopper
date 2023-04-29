import { render, screen } from "@testing-library/react";
import CountriesPreview from "../CountriesPreview";

test("renders country information correctly", async () => {
  const name = "Canada";
  const capital = "Ottawa";
  const continent = "North America";
  const flag = "🇨🇦";

  render(
    <CountriesPreview
      name={name}
      capital={capital}
      continent={continent}
      flag={flag}
    />
  );

  const countryName = await screen.findByText(name);
  const countryCapital = await screen.findByText(capital);
  const countryContinent = await screen.findByText(continent);
  const countryFlag = await screen.findByText(flag);

  expect(countryName).toBeInTheDocument();
  expect(countryCapital).toBeInTheDocument();
  expect(countryContinent).toBeInTheDocument();
  expect(countryFlag).toBeInTheDocument();
});
