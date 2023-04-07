import Link from "next/link";
import Home from "../../public/assets/home.svg";
import Earth from "../../public/assets/earth.svg";
import Map from "../../public/assets/map.svg";
import StyledFooter from "../StyledFooter";
import StarBox from "../../public/assets/starbox.svg";
import Star from "../../public/assets/star.svg";

export default function Navigation() {
  return (
    <StyledFooter>
      <Link aria-label="go to homepage" href="/">
        <Home aria-label="home" />
      </Link>
      <Link aria-label="go to listpage" href="/list">
        <Earth aria-label="listpage" />
      </Link>
      <Link aria-label="go to visitedpage" href="/visited">
        <Map aria-label="visitedpage" />
      </Link>
      <Link aria-label="go to favoritespage" href="/favorites">
        <Star aria-label="favoritespage" />
      </Link>
    </StyledFooter>
  );
}
