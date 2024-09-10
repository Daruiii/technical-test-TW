"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (status) {
      apiUrl += `&status=${status}`;
    }

    if (name) {
      apiUrl += `&name=${name}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [page, status, name]);

  return (
    <div>
      <h1>Liste des Personnages</h1>

      <input
        type="text"
        placeholder="Rechercher un personnage"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setPage(1);
        }}
      />

      <div>
        <button
          onClick={() => {
            setStatus("");
            setPage(1);
          }}
        >
          Tous
        </button>
        <button
          onClick={() => {
            setStatus("alive");
            setPage(1);
          }}
        >
          Vivant
        </button>
        <button
          onClick={() => {
            setStatus("dead");
            setPage(1);
          }}
        >
          Mort
        </button>
        <button
          onClick={() => {
            setStatus("unknown");
            setPage(1);
          }}
        >
          Inconnu
        </button>
      </div>

      <ul>
        {characters &&
          characters.map((character) => (
            <li key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <img src={character.image} alt={character.name} />
                <p>
                  {character.name} - {character.status}
                </p>
              </Link>
            </li>
          ))}
      </ul>

      <div>
        {info && info.prev && (
          <button onClick={() => (info.prev ? setPage(page - 1) : null)}>
            Page Précédente
          </button>
        )}
        {info && info.next && (
          <button onClick={() => (info.next ? setPage(page + 1) : null)}>
            Page Suivante
          </button>
        )}
      </div>
    </div>
  );
}
