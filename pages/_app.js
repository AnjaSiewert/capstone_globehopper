import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps, isVisited }) {
  const [countriesInfo, setCountriesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading...";

  function handleToggleVisited(name) {
    return setCountriesInfo((countriesInfo) => {
      const info = countriesInfo.find((info) => info.country.name === name);
      if (info) {
        return countriesInfo.map((info) =>
          info.country.name === name
            ? { ...info, isVisited: !info.isVisited }
            : info
        );
      }
      return [...countriesInfo, { country: { name }, isVisited: true }];
    });
  }
  console.log(countriesInfo);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        countries={data}
        onToggleVisited={handleToggleVisited}
        isVisited={isVisited}
      />
    </>
  );
}
