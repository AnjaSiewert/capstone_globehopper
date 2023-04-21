import { useState } from "react";
import StyledSeachbar from "./StyledSearchBar";

export default function Searchbar({ countries, setFilteredCountries }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    setFilteredCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <StyledSeachbar
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
      value={searchInput}
    />
  );
}
