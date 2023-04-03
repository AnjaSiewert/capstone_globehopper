export default function CountriesList({ countries }) {
  return (
    <>
      <ul>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
      </ul>
    </>
  );
}
