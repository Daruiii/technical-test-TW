import Link from "next/link";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>
          <img src="/images/brandify_logo.svg" alt="Brandify" />
        </a>
      </Link>
      <Link href="/characters" legacyBehavior>
        <a className="text">Personnages</a>
      </Link>
    </nav>
  );
}