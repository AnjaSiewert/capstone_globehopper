import Link from "next/link";
import CountriesList from "../components/CountriesList/CountriesList";
import Header from "../components/Header/Header";

export default function CountriesListPage({
  countries,
  onToggleVisited,
  countriesInfo,
}) {
  return (
    <>
      <Header headline="explore" />
      <Link href="/visited">Go to visited page</Link>
      <CountriesList
        countries={countries}
        onToggleVisited={onToggleVisited}
        countriesInfo={countriesInfo}
      />
    </>
  );
}
