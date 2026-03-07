import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "8px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
