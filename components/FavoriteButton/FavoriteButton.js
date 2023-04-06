import styled from "styled-components";
import Starbox from "./starbox.svg";

const StarboxLiked = () => <Starbox height={32} width={32} fill="red" />;

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
        {isFavorite ? <StarboxLiked /> : <Starbox height={32} width={32} />}
      </StyledButton>
    </>
  );
}
