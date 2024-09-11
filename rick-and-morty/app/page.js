import Link from 'next/link';
import Navbar from './components/Navbar';
import styles from './Page.module.css';

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.homepage}>
    <div className={styles.content}>
      <h1>Bienvenue sur Brandify</h1>
      <p>Explorez les personnages de Rick and Morty dans une interface futuriste. Cliquez ci-dessous pour commencer !</p>
      <Link href="/characters" legacyBehavior>
        <a className={styles.ctabutton}>Explorer</a>
      </Link>
    </div>
  </div>
  </>
  );
}
