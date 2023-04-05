import Link from "next/link";
import styled from "styled-components";
import Home from "../../assets/home.svg";
import Earth from "../../assets/earth.svg";
import Map from "../../assets/map.svg";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--tourquoise);
`;

export default function Navigation() {
  return (
    <StyledFooter>
      <Link href="/">
        <Home />
      </Link>
      <Link href="/list">
        <Earth />
      </Link>
      <Link href="/visited">
        <Map />
      </Link>
    </StyledFooter>
  );
}
