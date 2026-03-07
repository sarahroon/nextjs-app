import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <header className={styles.header}>
      <h1>My Modern Blog</h1>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <button
          className={styles.toggleButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}
