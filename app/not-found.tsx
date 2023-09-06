import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>{`😱 Uh oh! We can't find the URL you requested.`}</h1>
      <h2>
        <Link href="/">Take Me Back Home</Link>
      </h2>
    </>
  );
}
