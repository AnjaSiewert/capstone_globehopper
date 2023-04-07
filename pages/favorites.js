import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import Header from "../components/Header/Header";
import StyledButton from "../components/StyledButton";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";

export default function FavoriteCountriesPage({
  countries,
  countriesInfo,
  onToggleFavorite,
}) {
  const listFavoriteCountries = countriesInfo.filter((info) => info.isFavorite);

  const favoriteCountries = countries.filter((country) =>
    listFavoriteCountries.find((info) => info.name === country.name.common)
  );

  return (
    <>
      <Header headline="to explore" />
      <StyledList>
        {favoriteCountries.map((country) => {
          return (
            <>
              <StyledListElement key={country.name}>
                <CountriesPreview
                  name={country.name.common}
                  capital={country.capital}
                  continent={country.region}
                  flag={country.flag}
                  countries={favoriteCountries}
                  onToggleFavorite={onToggleFavorite}
                  countriesInfo={countriesInfo}
                />
                <StyledButton positionSVG>
                  <FavoriteButton
                    onToggleFavorite={onToggleFavorite}
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
