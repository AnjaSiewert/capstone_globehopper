import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";

export default function VisitedCountriesPage({
  countries,
  countriesInfo,
  onToggleVisited,
}) {
  const listVisitedCountries = countriesInfo.filter((info) => info.isVisited);

  const visitedCountries = countries.filter((country) =>
    listVisitedCountries.find((info) => info.name === country.name.common)
  );

  return (
    <>
      <Header headline="explored" />
      <StyledList>
        {visitedCountries.map((country) => {
          return (
            <>
              <StyledListElement key={country.name}>
                <CountriesPreview
                  name={country.name.common}
                  capital={country.capital}
                  continent={country.region}
                  flag={country.flag}
                  countries={visitedCountries}
                  onToggleVisited={onToggleVisited}
                  countriesInfo={countriesInfo}
                />
              </StyledListElement>
            </>
          );
        })}
      </StyledList>
    </>
  );
}
