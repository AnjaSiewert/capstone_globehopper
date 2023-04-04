import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";

export default function CountriesListPage({
  countries,
  onToggleVisited,
  countriesInfo,
  name,
}) {
  return (
    <>
      <Header headline="explore" />
      <CountriesList
        countries={countries}
        onToggleVisited={onToggleVisited}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
