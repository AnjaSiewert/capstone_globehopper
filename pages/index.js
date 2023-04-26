import Header from "../components/Header";
import Image from "next/image";
import Counter from "../components/Counter";
import StyledDiv from "../components/StyledDiv";
import worldMap from "../public/assets/worldmap.jpg";
import CounterContinent from "../components/CounterContinent";

export default function HomePage({ countries, countriesInfo }) {
  return (
    <>
      <Header headline="globehopper" />
      <StyledDiv isShowingImage>
        <Image
          src={worldMap}
          height={250}
          width={300}
          alt="worldmap"
          priority
        />
      </StyledDiv>
      <Counter countries={countries} countriesInfo={countriesInfo} />
      <CounterContinent countries={countries} countriesInfo={countriesInfo} />
    </>
  );
}
