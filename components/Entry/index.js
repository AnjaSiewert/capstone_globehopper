export default function Entry({ entries }) {
  return (
    <ul>
      {entries.date && <li>When: {entries.date}</li>}
      {entries.passport && <li>Passport required {entries.passport}</li>}
      {entries.vaccination && (
        <li>Vaccination required {entries.vaccination}</li>
      )}
      {entries.visa && <li>Visa required {entries.visa}</li>}
      {entries.alloweddays && <li>Allowed days: {entries.alloweddays}</li>}
      {entries.notes && <li>Notes: {entries.notes}</li>}
    </ul>
  );
}
