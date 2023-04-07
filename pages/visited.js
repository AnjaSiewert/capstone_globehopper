import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";
import StyledButton from "../components/StyledButton";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";
import VisitedButton from "../components/VisitedButton/VisitedButton";

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
                <StyledButton positionSVG>
                  <VisitedButton
                    onToggleVisited={onToggleVisited}
                    countriesInfo={countriesInfo}
                    name={country.name.common}
                  />
                </StyledButton>
              </StyledListElement>
            </>
          );
        })}
      </StyledList>
    </>
  );
}
