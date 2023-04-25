import Star from "../../public/assets/star-with-stroke.svg";
import StyledSVG from "../StyledSVG";

const StarLiked = () => <Star height={32} width={32} fill="#76AEDF" />;

export default function FavoriteButton({
  onToggleFavorite,
  name,
  countriesInfo,
}) {
  const { isFavorite } = countriesInfo.find(
    (country) => country.name === name
  ) ?? { isFavorite: false };

  return (
    <>
      <StyledSVG
        aria-label="Click"
        onClick={() => {
          onToggleFavorite(name);
        }}
      >
        {isFavorite ? <StarLiked /> : <Star height={32} width={32} />}
      </StyledSVG>
    </>
  );
}
