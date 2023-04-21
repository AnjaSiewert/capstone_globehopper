import { useState } from "react";
import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar/Searchbar";
import FilterContinents from "../components/FilterContinents/FilterContinents";

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
      <Searchbar
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <FilterContinents
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <CountriesList
        countries={filteredCountries}
        onToggleVisited={onToggleVisited}
        onToggleFavorite={onToggleFavorite}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
