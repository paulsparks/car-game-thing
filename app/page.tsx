import Link from "next/link";

export default function Home() {
  return (
    <>
      <p className="text-5xl">Home</p>
      <Link href="/ExamplePage">Example Page</Link>
    </>
  );
}
