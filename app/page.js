import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Multi-page form</h1>
      <Link href="/form/step1">Start Form</Link>
    </main>
  );
}
