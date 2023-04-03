export default function CountriesList({ countries }) {
  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.name.common}>{country.name.common}</li>
        ))}
      </ul>
    </>
  );
}
