import Link from "next/link";
import Home from "../../assets/home.svg";
import Earth from "../../assets/earth.svg";
import Map from "../../assets/map.svg";
import StyledFooter from "../StyledFooter";

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
