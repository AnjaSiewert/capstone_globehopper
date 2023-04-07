import StyledButton from "../StyledButton";
import Check from "../../public/assets/check.svg";

const CheckLiked = () => <Check height={32} width={32} fill="red" />;

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
        }}
      >
        {isVisited ? <CheckLiked /> : <Check height={32} width={32} />}
      </StyledButton>
    </>
  );
}
