import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails";

export default function CountryDetailsPage({ selectedCountry, name }) {
  return (
    <>
      <Header headline="globehopper" />
      <CountryDetails selectedCountry={selectedCountry} />
    </>
  );
}
