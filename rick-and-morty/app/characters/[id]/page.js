"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';  // Correctement utiliser useParams

export default function CharacterDetail() {
  const { id } = useParams();  // Récupère l'ID dynamique de l'URL
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
    <div>
      <button onClick={() => window.history.back()}>Retour</button>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status : {character.status}</p>
      <p>Espèce : {character.species}</p>
      <p>Genre : {character.gender}</p>
      <p>Origine : {character.origin.name}</p>
    </div>
  );
}
