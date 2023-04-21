import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";
import VisitedButton from "../components/VisitedButton/VisitedButton";
import StyledSVG from "../components/StyledSVG";
import { Fragment } from "react";

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
      <StyledList isOnCard>
        {visitedCountries
          .slice()
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map((country) => {
            return (
              <Fragment key={country.cca2}>
                <StyledListElement key={country.name}>
                  <CountriesPreview
                    name={country.name.common}
                    capital={country.capital}
                    continent={country.continents}
                    flag={country.flag}
                    countries={visitedCountries}
                    onToggleVisited={onToggleVisited}
                    countriesInfo={countriesInfo}
                  />
                  <StyledSVG positionSVG>
                    <VisitedButton
                      onToggleVisited={onToggleVisited}
                      countriesInfo={countriesInfo}
                      name={country.name.common}
                    />
                  </StyledSVG>
                </StyledListElement>
              </Fragment>
            );
          })}
      </StyledList>
    </>
  );
}
