import VisitedButton from "../VisitedButton/VisitedButton";

export default function CountriesPreview({
  countries,
  countriesInfo,
  onToggleVisited,
  name,
}) {
  return (
    <>
      <p>{name}</p>
      <VisitedButton
        countries={countries}
        onToggleVisited={onToggleVisited}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
