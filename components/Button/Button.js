import Check from "./check.svg";
import Starbox from "./starbox.svg";
import styled from "styled-components";

const StarboxLiked = () => <Starbox height={32} width={32} fill="red" />;
const CheckLiked = () => <Check height={32} width={32} fill="red" />;

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

export default function Button({
  onToggleVisited,
  onToggleFavorite,
  name,
  countriesInfo,
}) {
  const { isVisited } = countriesInfo.find(
    (country) => country.name === name
  ) ?? { isVisited: false };

  const { isFavorite } = countriesInfo.find(
    (country) => country.name === name
  ) ?? { isFavorite: false };

  return (
    <>
      <StyledButton
        aria-label="Click"
        onClick={() => {
          onToggleVisited(name);
        }}
      >
        {isVisited ? <CheckLiked /> : <Check height={32} width={32} />}
      </StyledButton>
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
