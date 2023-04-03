import Check from "./check.svg";

//const CheckVisited = () => <Check fill="blue" />;

export default function VisitedButton({ onToggleVisited }) {
  return (
    <>
      <Check aria-label="Click" onClick={onToggleVisited} />
    </>
  );
}
