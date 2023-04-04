import Link from "next/link";
import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";

export default function VisitedCountriesPage({
  countries,
  countriesInfo,
  onToggleVisited,
}) {
  const listVisitedCountries = countriesInfo.filter((info) => info.isVisited);

  const visitedCountries = countries.filter((country) =>
    listVisitedCountries.find((info) => info.name === country.name.common)
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
              <li key={country.name}>
                <CountriesPreview
                  name={country.name.common}
                  capital={country.capital}
                  continent={country.region}
                  flag={country.flag}
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
