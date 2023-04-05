import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href="/list">Go to List of countries</Link>
      <br />
      <Link href="/visited">Go to List of visited countries</Link>
    </>
  );
}
