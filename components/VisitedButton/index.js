import Check from "../../public/assets/check.svg";
import StyledSVG from "../StyledSVG";

const CheckLiked = () => <Check height={32} width={32} fill="#599FA8" />;

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
      <StyledSVG
        aria-label="Click to mark as visited"
        onClick={() => {
          onToggleVisited(name);
        }}
      >
        {isVisited ? <CheckLiked /> : <Check height={32} width={32} />}
      </StyledSVG>
    </>
  );
}
