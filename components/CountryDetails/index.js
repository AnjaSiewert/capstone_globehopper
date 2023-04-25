import StyledFlag from "../StyledFlag";
import StyledDiv from "../StyledDiv";
import styled from "styled-components";
import StyledList from "../StyledList";
import Link from "next/link";
import Arrow from "../../public/assets/arrow-left.svg";

const StyledLink = styled(Link)`
  font-size: 2rem;
  position: absolute;
  right: 21rem;
  top: 5.5rem;
`;

export default function CountryDetails({ selectedCountry }) {
  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (!selectedCountry) {
    return <h2>is Loading</h2>;
  }

  const languagesWithSeparators =
    selectedCountry.languages &&
    Object.values(selectedCountry.languages).join(", ");

  const timezoneWithSeparators = selectedCountry.timezones?.join(", ");

  function getLocalTime(selectedCountry) {
    const timeZoneMap = {
      "UTC+01:00": "Europe/Paris",
      "UTC+02:00": "Europe/Helsinki",
      "UTC+03:00": "Europe/Moscow",
      "UTC+03:30": "Asia/Tehran",
      "UTC+04:00": "Asia/Dubai",
      "UTC+04:30": "Asia/Kabul",
      "UTC+05:00": "Asia/Karachi",
      "UTC+05:30": "Asia/Calcutta",
      "UTC+05:45": "Asia/Katmandu",
      "UTC+06:00": "Asia/Dhaka",
      "UTC+06:30": "Asia/Rangoon",
      "UTC+07:00": "Asia/Bangkok",
      "UTC+08:00": "Asia/Shanghai",
      "UTC+09:00": "Asia/Tokyo",
      "UTC+09:30": "Australia/Darwin",
      "UTC+10:00": "Australia/Sydney",
      "UTC+10:30": "Australia/Lord_Howe",
      "UTC+11:00": "Pacific/Guadalcanal",
      "UTC+11:30": "Pacific/Norfolk",
      "UTC+12:00": "Pacific/Auckland",
      "UTC+12:45": "Pacific/Chatham",
      "UTC+13:00": "Pacific/Tongatapu",
      "UTC+14:00": "Pacific/Kiritimati",
      "UTC-01:00": "Atlantic/Azores",
      "UTC-02:00": "America/Noronha",
      "UTC-03:00": "America/Sao_Paulo",
      "UTC-03:30": "America/St_Johns",
      "UTC-04:00": "America/Caracas",
      "UTC-05:00": "America/Bogota",
      "UTC-06:00": "America/Mexico_City",
      "UTC-07:00": "America/Phoenix",
      "UTC-08:00": "America/Los_Angeles",
      "UTC-09:00": "America/Anchorage",
      "UTC-09:30": "Pacific/Marquesas",
      "UTC-10:00": "Pacific/Honolulu",
      "UTC-11:00": "Pacific/Midway",
      "UTC-12:00": "Pacific/Kwajalein",
      UTC: "Europe/London",
    };

    const selectedTimeZone = selectedCountry.timezones.filter((timezone) =>
      timeZoneMap.hasOwnProperty(timezone)
    );

    const localTimes = selectedTimeZone.map((timezone) =>
      new Date().toLocaleString("en-US", {
        timeZone: timeZoneMap[timezone],
      })
    );
    return localTimes.map((localTime) => <li key={localTime}>{localTime}</li>);
  }

  return (
    <StyledDiv isOnDetailsPage>
      <StyledLink href="/list">
        <Arrow />
      </StyledLink>
      <h1>{selectedCountry.name.common}</h1>
      <span>
        <strong>Continent:</strong> {selectedCountry.continents}
      </span>
      <span>
        <strong>Subregion:</strong> {selectedCountry.subregion}
      </span>
      <span>
        <strong>Capital:</strong> {selectedCountry.capital}
      </span>
      <span>
        <strong>Population:</strong> {addSeparators(selectedCountry.population)}
      </span>
      <span>
        <strong>
          {Object.keys(selectedCountry?.languages || selectedCountry.timezones)
            .length > 1
            ? "Languages: "
            : "Language: "}
        </strong>
        {languagesWithSeparators}
      </span>

      {
        <span>
          <strong>Currency: </strong>
          {selectedCountry.currencies &&
            Object.values(selectedCountry.currencies).map((currency, index) => (
              <span key={index}>{currency.name}</span>
            ))}
        </span>
      }
      <span>
        <strong>
          {selectedCountry.timezones.length > 1 ? "Timezones:" : "Timezone:"}
        </strong>{" "}
        {selectedCountry.timezones.length > 1 && <br />}
        {timezoneWithSeparators}
      </span>
      <span>
        <strong>
          {selectedCountry.timezones.length > 1
            ? "Current local times:"
            : "Current local time:"}
        </strong>{" "}
        <li>{getLocalTime(selectedCountry)}</li>
      </span>
      <span>
        <strong>UN Member:</strong> {selectedCountry.unMember ? "Yes" : "No"}
      </span>

      <StyledFlag>{selectedCountry.flag}</StyledFlag>
    </StyledDiv>
  );
}
