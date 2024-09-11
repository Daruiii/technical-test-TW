"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './CharacterDetail.module.css';
import Navbar from '@/app/components/Navbar';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => setCharacter(data));
    }
  }, [id]);

  if (!character) return <p>Chargement...</p>;

  return (
    <>
      <Navbar />
    <div className={styles.characterDetailContainer}>
      <button onClick={() => window.history.back()}>Retour</button>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status : {character.status}</p>
      <p>Espèce : {character.species}</p>
      <p>Genre : {character.gender}</p>
      <p>Origine : {character.origin.name}</p>
    </div>
    </>
  );
}
