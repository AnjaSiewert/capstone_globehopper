import StyledList from "../StyledList";

export default function Entry({ entries, name }) {
  const selectedCountry = entries.find((entry) => entry.name === name);

  return (
    selectedCountry && (
      <StyledList isOnEntryList>
        {selectedCountry.date && (
          <li>
            <strong>When:</strong>{" "}
            {new Date(selectedCountry.date).toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </li>
        )}
        {selectedCountry.passport && (
          <li>
            <strong>Passport required:</strong> {selectedCountry.passport}
          </li>
        )}
        {selectedCountry.vaccination && (
          <li>
            <strong>Vaccination required:</strong>
            {selectedCountry.vaccination}
          </li>
        )}
        {selectedCountry.visa && (
          <li>
            <strong>Visa required:</strong> {selectedCountry.visa}
          </li>
        )}
        {selectedCountry.allowedDays && (
          <li>
            <strong>Allowed days:</strong> {selectedCountry.allowedDays}
          </li>
        )}
        {selectedCountry.notes && (
          <li>
            <strong>Notes:</strong> {selectedCountry.notes}
          </li>
        )}
      </StyledList>
    )
  );
}
