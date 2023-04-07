import styled from "styled-components";
import Starbox from "./starbox.svg";
import Star from "./star.svg";

const StarboxLiked = () => <Starbox height={32} width={32} fill="red" />;
const StarLiked = () => <Star height={32} width={32} fill="red" />;

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

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
      <StyledButton
        aria-label="Click"
        onClick={() => {
          onToggleFavorite(name);
        }}
      >
        {isFavorite ? <StarLiked /> : <Star height={32} width={32} />}
      </StyledButton>
    </>
  );
}
