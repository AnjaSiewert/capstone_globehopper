import Link from "next/link";
import Home from "../../public/assets/home-outline.svg";
import Earth from "../../public/assets/earth.svg";
import Map from "../../public/assets/map.svg";
import StyledFooter from "../StyledFooter";
import Star from "../../public/assets/star.svg";

export default function Navigation() {
  const activeStyles = { width: "60px", height: "60px" };
  const inactiveStyles = { width: "35px", height: "35px" };

  function isActive(href) {
    if (typeof window !== "undefined") {
      return window.location.pathname === href;
    }
  }

  return (
    <StyledFooter>
      <Link aria-label="go to homepage" href="/">
        <Home
          aria-label="home"
          style={isActive("/") ? activeStyles : inactiveStyles}
        />
      </Link>
      <Link aria-label="go to listpage" href="/list">
        <Earth
          aria-label="listpage"
          style={isActive("/list") ? activeStyles : inactiveStyles}
        />
      </Link>
      <Link aria-label="go to visitedpage" href="/visited">
        <Map
          aria-label="visitedpage"
          style={isActive("/visited") ? activeStyles : inactiveStyles}
        />
      </Link>
      <Link aria-label="go to favoritespage" href="/favorites">
        <Star
          aria-label="favoritespage"
          style={isActive("/favorites") ? activeStyles : inactiveStyles}
        />
      </Link>
    </StyledFooter>
  );
}
