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
