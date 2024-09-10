import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">
          <p><img src="/brandify_logo.svg" alt="Brandify Logo" /></p>
        </Link>
        <Link href="/characters">
          <p>Personnages</p>
        </Link>
      </nav>

      <h1>Bienvenue sur Brandify</h1>
      <p>Utilisez la barre de navigation pour explorer les personnages de Rick and Morty !</p>
    </div>
  );
}
