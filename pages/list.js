import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";

export default function CountriesListPage({
  countries,
  onToggleVisited,
  onToggleFavorite,
  countriesInfo,
}) {
  return (
    <>
      <Header headline="explore" />
      <CountriesList
        countries={countries}
        onToggleVisited={onToggleVisited}
        onToggleFavorite={onToggleFavorite}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
