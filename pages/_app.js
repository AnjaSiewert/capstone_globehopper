import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [countriesInfo, setCountriesInfo] = useLocalStorageState(
    "countriesInfo",
    { defaultValue: [] }
  );

  const router = useRouter();
  const { name } = router.query;

  const { data, error, isLoading } = useSWR(
    name
      ? `https://restcountries.com/v3.1/name/${name}`
      : "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (error) return <h2>An error has occurred.</h2>;
  if (isLoading) return <h2>is loading...</h2>;

  const selectedCountry = data.find(
    (country) => country.name.common.toLowerCase() === name
  );

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
            ? {
                ...countryInfo,
                isFavorite: !countryInfo.isFavorite,
              }
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
          selectedCountry={selectedCountry}
        />
      </Layout>
    </>
  );
}
