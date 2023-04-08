import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";
import Searchbar from "../components/SearchBar/Searchbar";

export default function CountriesListPage({
  countries,
  onToggleVisited,
  onToggleFavorite,
  countriesInfo,
}) {
  return (
    <>
      <Header headline="explore" />
      <Searchbar countries={countries} />
      <CountriesList
        countries={countries}
        onToggleVisited={onToggleVisited}
        onToggleFavorite={onToggleFavorite}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
