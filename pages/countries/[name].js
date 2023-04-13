import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails";

export default function CountryDetailsPage({ selectedCountry, name }) {
  console.log("app selected", selectedCountry);
  return (
    <>
      <Header headline="globehopper" />
      <CountryDetails name={name} selectedCountry={selectedCountry} />
    </>
  );
}
