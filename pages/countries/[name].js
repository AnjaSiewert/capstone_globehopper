import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails";

export default function CountryDetailsPage({ countries }) {
  return (
    <>
      <Header headline="globehopper" />
      <CountryDetails countries={countries} />
    </>
  );
}
