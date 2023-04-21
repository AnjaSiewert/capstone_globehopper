import { useState } from "react";
import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar";
import FilterContinents from "../components/FilterContinents";
import styled from "styled-components";

const StyledSearchbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
`;

export default function CountriesListPage({
  countries,
  onToggleVisited,
  onToggleFavorite,
  countriesInfo,
}) {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  return (
    <>
      <Header headline="explore" />
      <StyledSearchbarContainer>
        <Searchbar
          countries={countries}
          setFilteredCountries={setFilteredCountries}
        />
        <FilterContinents
          countries={countries}
          setFilteredCountries={setFilteredCountries}
        />
      </StyledSearchbarContainer>
      <CountriesList
        countries={filteredCountries}
        onToggleVisited={onToggleVisited}
        onToggleFavorite={onToggleFavorite}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
