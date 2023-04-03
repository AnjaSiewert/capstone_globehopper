import VisitedButton from "../VisitedButton/VisitedButton";

export default function CountriesList({ countries, onToggleVisited }) {
  return (
    <>
      <ul>
        {countries
          .map((country) => ({
            key: country.name,
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <li key={country.name}>
              {country.name} <VisitedButton onToggleVisited={onToggleVisited} />
            </li>
          ))}
      </ul>
    </>
  );
}
