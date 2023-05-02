import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterContinents from "./index";

test("filters countries by continent when user selects an option", async () => {
  const countries = [
    {
      name: {
        common: "Canada",
      },
      region: "Americas",
      subregion: "North America",
      continents: ["North America"],
    },
    {
      name: {
        common: "Mexico",
      },
      region: "Americas",
      subregion: "North America",
      continents: ["North America"],
    },
    {
      name: {
        common: "Japan",
      },
      region: "Asia",
      subregion: "Eastern Asia",
      continents: ["Asia"],
    },
    {
      name: {
        common: "Australia",
      },
      region: "Oceania",
      subregion: "Australia and New Zealand",
      continents: ["Oceania"],
    },
  ];
  const setFilteredCountries = jest.fn();

  render(
    <FilterContinents
      countries={countries}
      setFilteredCountries={setFilteredCountries}
    />
  );

  const selectElement = screen.getByRole("combobox");
  await userEvent.selectOptions(selectElement, "North America");

  expect(setFilteredCountries).toHaveBeenCalledTimes(1);
  expect(setFilteredCountries).toHaveBeenCalledWith([
    {
      name: {
        common: "Canada",
      },
      region: "Americas",
      subregion: "North America",
      continents: ["North America"],
    },
    {
      name: {
        common: "Mexico",
      },
      region: "Americas",
      subregion: "North America",
      continents: ["North America"],
    },
  ]);
});
