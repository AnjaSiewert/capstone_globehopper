import { useState } from "react";

export default function Searchbar({ countries, setFilteredCountries }) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target.value;
    setSearchInput(input);
    const filtered = countries.filter((country) => {
      return country.name.common.toLowerCase().includes(input.toLowerCase());
    });
    setFilteredCountries(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
      value={searchInput}
    />
  );
}
