import styles from "./Pagination.module.css";

export default function Pagination({ info, setPage, page }) {
    return (
      <div className={styles.pagination}>
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
    );
  }
  