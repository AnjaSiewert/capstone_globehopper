export default function CountriesList({ countries }) {
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
            <li key={country.name}>{country.name}</li>
          ))}
      </ul>
    </>
  );
}
