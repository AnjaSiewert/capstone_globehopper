import { useState } from "react";
import styled from "styled-components";

const StyledSeachbar = styled.input`
  margin-top: 1rem;
  margin-left: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  width: 10rem;
`;

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
    <StyledSeachbar
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
      value={searchInput}
    />
  );
}
