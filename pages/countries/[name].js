import { useRouter } from "next/router";
import useSWR from "swr";
import StyledDiv from "../../components/StyledDiv";
import Header from "../../components/Header/Header";
import StyledFlag from "../../components/StyledFlag";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CountryDetailsPage() {
  const router = useRouter();
  const { name } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/name/${name}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading...";

  function addSeparators(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      <Header headline="globehopper" />
      <StyledDiv>
        <h1>{data[0].name.common}</h1>
        <p>
          <strong>Continent:</strong> {data[0].continents}
        </p>
        <p>
          <strong>Capital:</strong> {data[0].capital}
        </p>
        <p>
          <strong>Population:</strong> {addSeparators(data[0].population)}
        </p>
        <p>
          <strong>Language: </strong>
          {Object.values(data[0].languages).map((language, index) => (
            <span key={index}>{language}</span>
          ))}
        </p>

        {
          <p>
            <strong>Currencies: </strong>
            {Object.values(data[0].currencies).map((currency, index) => (
              <span key={index}>
                {currency.name} <br />
                <strong>Symbol: </strong>
                {currency.symbol}
              </span>
            ))}
          </p>
        }
        <p>
          <strong>Timezone</strong> {data[0].timezones}
        </p>

        <StyledFlag>{data[0].flag}</StyledFlag>
      </StyledDiv>
    </>
  );
}
