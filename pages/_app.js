import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";
import Layout from "../components/Layout/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading...";

  function handleToggleVisited(name) {
    setCountriesInfo((countriesInfo) => {
      const info = countriesInfo.find(
        (countryInfo) => countryInfo.name === name
      );
      if (info) {
        return countriesInfo.map((countryInfo) =>
          countryInfo.name === name
            ? { ...countryInfo, isVisited: !countryInfo.isVisited }
            : countryInfo
        );
      }
      return [...countriesInfo, { name, isVisited: true }];
    });
  }

  function handleToggleFavorite(name) {
    setCountriesInfo((countriesInfo) => {
      const favoriteInfo = countriesInfo.find(
        (countryInfo) => countryInfo.name === name
      );

      if (favoriteInfo) {
        return countriesInfo.map((countryInfo) =>
          countryInfo.name === name
            ? { ...countryInfo, isFavorite: !countryInfo.isFavorite }
            : countryInfo
        );
      }
      return [...countriesInfo, { name, isFavorite: true }];
    });
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          countries={data}
          onToggleVisited={handleToggleVisited}
          onToggleFavorite={handleToggleFavorite}
          countriesInfo={countriesInfo}
        />
      </Layout>
    </>
  );
}
