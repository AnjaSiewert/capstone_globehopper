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

  // shorten function
  // find a solution for countries with multiple timezones

  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  function getLocalTime(selectedCountry) {
    if (selectedCountry.timezones.includes("UTC+01:00")) {
      return new Date().toLocaleString("en-GB", options, {
        timeZone: "Europe/Paris",
      });
    } else if (selectedCountry.timezones.includes("UTC+02:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Europe/Helsinki",
      });
    } else if (selectedCountry.timezones.includes("UTC+03:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Europe/Moscow",
      });
    } else if (selectedCountry.timezones.includes("UTC+04:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Dubai",
      });
    } else if (selectedCountry.timezones.includes("UTC+05:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Karachi",
      });
    } else if (selectedCountry.timezones.includes("UTC+06:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Dhaka",
      });
    } else if (selectedCountry.timezones.includes("UTC+07:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Bangkok",
      });
    } else if (selectedCountry.timezones.includes("UTC+08:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Shanghai",
      });
    } else if (selectedCountry.timezones.includes("UTC+09:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Asia/Tokyo",
      });
    } else if (selectedCountry.timezones.includes("UTC+10:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Australia/Sydney",
      });
    } else if (selectedCountry.timezones.includes("UTC+11:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Pacific/Guadalcanal",
      });
    } else if (selectedCountry.timezones.includes("UTC+12:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Pacific/Auckland",
      });
    } else if (selectedCountry.timezones.includes("UTC-01:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Atlantic/Azores",
      });
    } else if (selectedCountry.timezones.includes("UTC-02:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Noronha",
      });
    } else if (selectedCountry.timezones.includes("UTC-03:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Sao_Paulo",
      });
    } else if (selectedCountry.timezones.includes("UTC-04:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Caracas",
      });
    } else if (selectedCountry.timezones.includes("UTC-05:00")) {
      return new Date().toLocaleString("en-US", { timeZone: "America/Bogota" });
    } else if (selectedCountry.timezones.includes("UTC-06:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Mexico_City",
      });
    } else if (selectedCountry.timezones.includes("UTC-07:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Phoenix",
      });
    } else if (selectedCountry.timezones.includes("UTC-08:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Los_Angeles",
      });
    } else if (selectedCountry.timezones.includes("UTC-09:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "America/Anchorage",
      });
    } else if (selectedCountry.timezones.includes("UTC-10:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Pacific/Honolulu",
      });
    } else if (selectedCountry.timezones.includes("UTC-11:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Pacific/Midway",
      });
    } else if (selectedCountry.timezones.includes("UTC-12:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Pacific/Kwajalein",
      });
    } else if (selectedCountry.timezones.includes("UTC+00:00")) {
      return new Date().toLocaleString("en-US", options, {
        timeZone: "Europe/London",
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
