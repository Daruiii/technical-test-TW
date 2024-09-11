import Link from 'next/link';
import styles from './CharacterCard.module.css';

export default function CharacterCard({ character }) {
  return (
    <li className={styles.card}>
      <Link href={`/characters/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <p>{character.name} - {character.status}</p>
      </Link>
    </li>
  );
}
