import StyledList from "../StyledList";

export default function Entry({ entries, name }) {
  const date = new Date(entries.date);
  const monthYear = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const selectedCountry = entries.name === name;

  return (
    selectedCountry && (
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
        {entries.allowedDays && (
          <li>
            <strong>Allowed days:</strong> {entries.allowedDays}
          </li>
        )}
        {entries.notes && (
          <li>
            <strong>Notes:</strong> {entries.notes}
          </li>
        )}
      </StyledList>
    )
  );
}
