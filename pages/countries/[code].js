import { useRouter } from "next/router";
import useSWR from "swr";
import StyledDiv from "../../components/StyledDiv";
import Header from "../../components/Header/Header";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CountryDetailsPage() {
  const router = useRouter();
  const { code } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://restcountries.com/v3.1/alpha/${code}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading...";

  console.log(data);

  return (
    <>
      <Header headline="globehopper" />
      <StyledDiv>
        <h1>{data[0].name.common}</h1>
        <p>
          <strong>Continent</strong> {data[0].region}
        </p>
        <p>
          <strong>Capital</strong> {data[0].capital}
        </p>
        <p>
          <strong>Language</strong> {data[0].languages[code]}
        </p>
        <p>
          <strong>Population</strong> {data[0].population}
        </p>
        <p>
          <strong>Timezone</strong> {data[0].timezones}
        </p>
        <p>
          <strong>Flag</strong> {data[0].flag}
        </p>
      </StyledDiv>
    </>
  );
}
