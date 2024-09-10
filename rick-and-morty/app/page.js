import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">
          <img src="/images/brandify_logo.svg" alt="Brandify" />
        </Link>
        <Link href="/characters">
          <p>Personnages</p>
        </Link>
      </nav>
    </div>
  );
}
