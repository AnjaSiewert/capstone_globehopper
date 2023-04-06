import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import Header from "../components/Header/Header";
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
              </StyledListElement>
            </>
          );
        })}
      </StyledList>
    </>
  );
}
