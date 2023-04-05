import Header from "../components/Header/Header";
import Image from "next/image";
import Counter from "../components/Counter/Counter";
import StyledDiv from "../components/StyledDiv";

export default function HomePage({ onCountVisitedCountries, countries }) {
  return (
    <>
      <Header headline="globehopper" />
      <StyledDiv>
        <Image
          src="/../public/assets/worldmap.jpg"
          height={250}
          width={250}
          alt="worldmap"
        />
      </StyledDiv>
      <Counter
        countries={countries}
        onCountVisitedCountries={onCountVisitedCountries}
      />
    </>
  );
}
