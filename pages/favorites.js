import { useState } from "react";
import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import Form from "../components/Form";
import Header from "../components/Header/Header";
import StyledButton from "../components/StyledButton";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";

export default function FavoriteCountriesPage({
  countries,
  countriesInfo,
  onToggleFavorite,
}) {
  const [showForm, setShowForm] = useState(false);

  const listFavoriteCountries = countriesInfo.filter((info) => info.isFavorite);

  const favoriteCountries = countries.filter((country) =>
    listFavoriteCountries.find((info) => info.name === country.name.common)
  );

  return (
    <>
      <Header headline="to explore" />
      <StyledList isOnCard>
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
                {showForm && <Form />}
              </StyledListElement>
              <button onClick={() => setShowForm(!showForm)}>
                {showForm === false ? "Click to add details" : "hide form"}
              </button>
            </>
          );
        })}
      </StyledList>
    </>
  );
}
