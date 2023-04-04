import Link from "next/link";
import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";

export default function VisitedCountriesPage({
  countries,
  countriesInfo,
  onToggleVisited,
}) {
  const listVisitedCountries = countriesInfo
    .filter((info) => info.isVisited)
    .map((info) => info.name);

  const visitedCountries = countries.filter((country) =>
    listVisitedCountries.includes(country.name)
  );

  console.log("listVisitedCountries", listVisitedCountries);
  console.log("VisitedCountries", visitedCountries);

  return (
    <>
      <Header headline="explored" />
      <Link href="/list">Go to list page</Link>
      <ul>
        {visitedCountries.map((country) => {
          return (
            <>
              <li key={country.name.common}>
                <CountriesPreview
                  name={visitedCountries.name}
                  countries={visitedCountries}
                  onToggleVisited={onToggleVisited}
                  countriesInfo={countriesInfo}
                />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
