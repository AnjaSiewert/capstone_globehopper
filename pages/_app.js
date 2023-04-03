import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading...";

  function handleToggleVisited() {
    return console.log("it works");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        countries={data}
        onToggleVisited={handleToggleVisited}
      />
    </>
  );
}
