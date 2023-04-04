import VisitedButton from "../VisitedButton/VisitedButton";

export default function CountriesPreview({
  countries,
  countriesInfo,
  onToggleVisited,
  name,
  capital,
  continent,
  flag,
}) {
  return (
    <>
      <p>Country: {name}</p>
      <p>Capital city: {capital}</p>
      <p>Continent: {continent}</p>
      <p>Flag: {flag}</p>
      <VisitedButton
        onToggleVisited={onToggleVisited}
        countriesInfo={countriesInfo}
        name={name}
      />
    </>
  );
}
