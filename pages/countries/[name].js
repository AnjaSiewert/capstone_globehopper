import { useRouter } from "next/router";
import useSWR from "swr";
import Header from "../../components/Header/Header";
import CountryDetails from "../../components/CountryDetails";

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

  return (
    <>
      <Header headline="globehopper" />
      <CountryDetails data={data} />
    </>
  );
}
