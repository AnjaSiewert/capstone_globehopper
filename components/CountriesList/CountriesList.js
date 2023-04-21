import VisitedButton from "../VisitedButton/VisitedButton";
import StyledListElement from "../StyledListElement";
import StyledList from "../StyledList";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import styled from "styled-components";
import Link from "next/link";

const StyledVisitedToggle = styled.div`
  position: absolute;
  right: 5rem;
`;

export default function CountriesList({
  countries,
  onToggleVisited,
  onToggleFavorite,
  countriesInfo,
}) {
  return (
    <>
      <StyledList>
        <i>Click on a countries name for details</i>
        {countries
          .map((country) => ({
            key: country.name,
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <StyledListElement isOnHomepage key={country.name}>
              <Link href={`/countries/${country.name.toLowerCase()}`}>
                {country.name}{" "}
              </Link>
              <StyledVisitedToggle>
                <VisitedButton
                  onToggleVisited={onToggleVisited}
                  countriesInfo={countriesInfo}
                  name={country.name}
                />
              </StyledVisitedToggle>
              <FavoriteButton
                onToggleFavorite={onToggleFavorite}
                countriesInfo={countriesInfo}
                name={country.name}
              />
            </StyledListElement>
          ))}
      </StyledList>
    </>
  );
}
