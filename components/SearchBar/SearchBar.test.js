import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "./index";

test("renders search input", () => {
  const countries = [];
  const setFilteredCountries = jest.fn();
  render(
    <Searchbar
      countries={countries}
      setFilteredCountries={setFilteredCountries}
    />
  );
  const searchInput = screen.getByPlaceholderText(/Search for a country.../i);
  expect(searchInput).toBeInTheDocument();
});

test("updates searchInput state when user types into input", async () => {
  const countries = [];
  const setFilteredCountries = jest.fn();
  render(
    <Searchbar
      countries={countries}
      setFilteredCountries={setFilteredCountries}
    />
  );
  const searchInput = screen.getByPlaceholderText(/Search for a country.../i);
  await userEvent.type(searchInput, "Canada");
  expect(searchInput).toHaveValue("Canada");
});
