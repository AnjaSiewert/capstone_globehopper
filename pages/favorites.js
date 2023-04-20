import { useState } from "react";
import CountriesPreview from "../components/CountriesPreview/CountriesPreview";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";
import Form from "../components/Form";
import Header from "../components/Header/Header";
import StyledList from "../components/StyledList";
import StyledListElement from "../components/StyledListElement";
import StyledSVG from "../components/StyledSVG";
import StyledButton from "../components/StyledButton";
import useLocalStorageState from "use-local-storage-state";
import Entry from "../components/Entry";
import { Fragment } from "react";

export default function FavoriteCountriesPage({
  countries,
  countriesInfo,
  onToggleFavorite,
}) {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const listFavoriteCountries = countriesInfo.filter((info) => info.isFavorite);

  const favoriteCountries = countries.filter((country) =>
    listFavoriteCountries.find((info) => info.name === country.name.common)
  );

  const countryToEdit = entries.filter((entry) => {
    entry.name === favoriteCountries.name;
  });

  function handleAddEntry(newEntry) {
    setEntries([{ ...newEntry }, ...entries]);
  }

  function handleEditEntry() {
    setIsEditing(true);
  }

  return (
    <>
      <Header headline="to explore" />
      <StyledList isOnCard>
        {favoriteCountries.map((country) => {
          const isCountrySelected = selectedCountry === country.name.common;
          return (
            <Fragment key={country.cca2}>
              <StyledListElement isOnFavoritesPage>
                <CountriesPreview
                  name={country.name.common}
                  capital={country.capital}
                  continent={country.region}
                  flag={country.flag}
                  countries={favoriteCountries}
                  onToggleFavorite={onToggleFavorite}
                  countriesInfo={countriesInfo}
                />
                <StyledSVG positionSVG>
                  <FavoriteButton
                    onToggleFavorite={onToggleFavorite}
                    countriesInfo={countriesInfo}
                    name={country.name.common}
                  />
                </StyledSVG>
                {isCountrySelected && (
                  <Form
                    onAddEntry={handleAddEntry}
                    name={country.name.common}
                  />
                )}
                <StyledButton
                  isHidingForm
                  onClick={() =>
                    setSelectedCountry(
                      !isCountrySelected && country.name.common
                    )
                  }
                >
                  {isCountrySelected ? "Hide form" : "Plan my trip"}
                </StyledButton>
              </StyledListElement>
              <Entry
                entries={entries}
                name={country.name.common}
                isEditing={isEditing}
                countryToEdit={countryToEdit}
              />
              <StyledButton onClick={handleEditEntry}>Edit</StyledButton>
            </Fragment>
          );
        })}
      </StyledList>
    </>
  );
}
