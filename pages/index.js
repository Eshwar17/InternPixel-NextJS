import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hi I am Next App</h1>
      <ul>
        <li>
            <Link href="/clients/max">Maxi</Link>
        </li>
    </ul>
    </>
  );
}
