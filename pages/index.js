import Header from "../components/Header/Header";
import Image from "next/image";
import Counter from "../components/Counter/Counter";
import StyledDiv from "../components/StyledDiv";
import worldMap from "../public/assets/worldmap.jpg";
import CounterContinent from "../components/CounterContinent/CounterContinent";

export default function HomePage({ countries, countriesInfo }) {
  return (
    <>
      <Header headline="globehopper" />
      <StyledDiv>
        <Image src={worldMap} height={250} width={250} alt="worldmap" />
      </StyledDiv>
      <Counter countries={countries} countriesInfo={countriesInfo} />
      <CounterContinent countries={countries} countriesInfo={countriesInfo} />
    </>
  );
}
