"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import styles from "./Characters.module.css";

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
      <Navbar />
      <div className={styles.pageContainer}>
        <div className={styles.controlsContainer}>
          <div className={styles.filters}>
            <button
              className={!status ? styles.active : ""}
              onClick={() => {
                setStatus("");
                setPage(1);
              }}
            >
              Tous
            </button>
            <button
              className={status === "alive" ? styles.active : ""}
              onClick={() => {
                setStatus("alive");
                setPage(1);
              }}
            >
              Vivant
            </button>
            <button
              className={status === "dead" ? styles.active : ""}
              onClick={() => {
                setStatus("dead");
                setPage(1);
              }}
            >
              Mort
            </button>
            <button
              className={status === "unknown" ? styles.active : ""}
              onClick={() => {
                setStatus("unknown");
                setPage(1);
              }}
            >
              Inconnu
            </button>
          </div>

          <input
            className={styles.searchBar}
            type="text"
            placeholder="Rechercher un personnage"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <ul className={styles.characterGrid}>
          {characters &&
            characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ul>

        <Pagination info={info} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
