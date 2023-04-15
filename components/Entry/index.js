import StyledList from "../StyledList";

export default function Entry({ entries }) {
  const date = new Date(entries.date);
  const monthYear = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <StyledList isOnEntryList>
      {entries.date && (
        <li>
          <strong>When:</strong> {monthYear}
        </li>
      )}
      {entries.passport && (
        <li>
          <strong>Passport required:</strong> {entries.passport}
        </li>
      )}
      {entries.vaccination && (
        <li>
          <strong>Vaccination required:</strong>
          {entries.vaccination}
        </li>
      )}
      {entries.visa && (
        <li>
          <strong>Visa required:</strong> {entries.visa}
        </li>
      )}
      {entries.alloweddays && (
        <li>
          <strong>Allowed days:</strong> {entries.alloweddays}
        </li>
      )}
      {entries.notes && (
        <li>
          <strong>Notes:</strong> {entries.notes}
        </li>
      )}
    </StyledList>
  );
}
