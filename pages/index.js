import Header from "../components/Header/Header";
import Image from "next/image";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export default function HomePage() {
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
    </>
  );
}
