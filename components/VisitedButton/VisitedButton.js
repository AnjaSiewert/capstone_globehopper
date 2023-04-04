import Check from "./check.svg";
import styled from "styled-components";

const CheckLiked = () => <Check height={32} width={32} fill="red" />;

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

export default function VisitedButton({
  onToggleVisited,
  name,
  countriesInfo,
}) {
  const { isVisited } = countriesInfo.find(
    (country) => country.name === name
  ) ?? { isVisited: false };

  return (
    <>
      <StyledButton
        aria-label="Click"
        onClick={() => {
          onToggleVisited(name);
          console.log("name", name);
        }}
      >
        {isVisited ? <CheckLiked /> : <Check height={32} width={32} />}
      </StyledButton>
    </>
  );
}
