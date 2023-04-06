import VisitedButton from "../VisitedButton/VisitedButton";
import StyledListElement from "../StyledListElement";
import StyledList from "../StyledList";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function CountriesList({
  countries,
  onToggleVisited,
  onToggleFavorite,
  countriesInfo,
}) {
  return (
    <>
      <StyledList>
        {countries
          .map((country) => ({
            key: country.name,
            name: country.name.common,
          }))
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((country) => (
            <StyledListElement isOnHomepage key={country.name}>
              {country.name}{" "}
              <VisitedButton
                onToggleVisited={onToggleVisited}
                countriesInfo={countriesInfo}
                name={country.name}
              />
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
