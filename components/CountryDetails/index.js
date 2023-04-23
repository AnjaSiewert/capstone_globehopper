import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";
import styled from "styled-components";

const StyledLink = styled.a`
  font-size: 2rem;
  position: relative;
  right: 9rem;
  top: 1rem;
`;

export default function CountryDetails({ selectedCountry }) {
  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (!selectedCountry) {
    return <h2>is Loading</h2>;
  }

  console.log(selectedCountry);
  const languagesWithSeparators =
    selectedCountry.languages &&
    Object.values(selectedCountry.languages).join(", ");

  const timezoneWithSeparators = selectedCountry.timezones?.join(", ");

  // find a solution for countries with multiple timezones
  // UTC :30 are missing

  /* "UTCs missing:"

"UTC+03:30"
"UTC+04:30"
"UTC+05:30"
"UTC+05:45"
"UTC+06:30"
"UTC+09:30"
"UTC+10:30"
"UTC+11:30"
"UTC+12:45"
"UTC+13:00"
"UTC+14:00"
"UTC-03:30"
"UTC-09:30" */

  function getLocalTime(selectedCountry) {
    const timeZoneMap = {
      "UTC+01:00": "Europe/Paris",
      "UTC+02:00": "Europe/Helsinki",
      "UTC+03:00": "Europe/Moscow",
      "UTC+04:00": "Asia/Dubai",
      "UTC+05:00": "Asia/Karachi",
      "UTC+06:00": "Asia/Dhaka",
      "UTC+07:00": "Asia/Bangkok",
      "UTC+08:00": "Asia/Shanghai",
      "UTC+09:00": "Asia/Tokyo",
      "UTC+10:00": "Australia/Sydney",
      "UTC+11:00": "Pacific/Guadalcanal",
      "UTC+12:00": "Pacific/Auckland",
      "UTC-01:00": "Atlantic/Azores",
      "UTC-02:00": "America/Noronha",
      "UTC-03:00": "America/Sao_Paulo",
      "UTC-04:00": "America/Caracas",
      "UTC-05:00": "America/Bogota",
      "UTC-06:00": "America/Mexico_City",
      "UTC-07:00": "America/Phoenix",
      "UTC-08:00": "America/Los_Angeles",
      "UTC-09:00": "America/Anchorage",
      "UTC-10:00": "Pacific/Honolulu",
      "UTC-11:00": "Pacific/Midway",
      "UTC-12:00": "Pacific/Kwajalein",
      UTC: "Europe/London",
    };

    const selectedTimeZone = selectedCountry.timezones.find((timezone) =>
      timeZoneMap.hasOwnProperty(timezone)
    );

    if (selectedTimeZone) {
      return new Date().toLocaleString("en-US", {
        timeZone: timeZoneMap[selectedTimeZone],
      });
    }
  }

  const currentLocalTime = getLocalTime(selectedCountry);

  return (
    <StyledDiv isOnDetailsPage>
      <StyledLink href="/list">🔙</StyledLink>
      <h1>{selectedCountry.name.common}</h1>
      <p>
        <strong>Continent:</strong> {selectedCountry.continents}
      </p>
      <p>
        <strong>Subregion:</strong> {selectedCountry.subregion}
      </p>
      <p>
        <strong>Capital:</strong> {selectedCountry.capital}
      </p>
      <p>
        <strong>Population:</strong> {addSeparators(selectedCountry.population)}
      </p>
      <p>
        <strong>Language: </strong>
        {languagesWithSeparators}
      </p>

      {
        <p>
          <strong>Currency: </strong>
          {selectedCountry.currencies &&
            Object.values(selectedCountry.currencies).map((currency, index) => (
              <span key={index}>{currency.name}</span>
            ))}
        </p>
      }
      <p>
        <strong>
          Timezone:
          <br />
        </strong>{" "}
        {timezoneWithSeparators}
      </p>
      <p>
        <strong>
          Current local time: <br />
        </strong>{" "}
        {currentLocalTime}
      </p>
      <p>
        <strong>UN Member:</strong> {selectedCountry.unMember ? "Yes" : "No"}
      </p>

      <StyledFlag>{selectedCountry.flag}</StyledFlag>
    </StyledDiv>
  );
}
