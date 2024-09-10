"use client"; 
import { useState, useEffect } from 'react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      <h1>Liste des Personnages</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name} - {character.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
