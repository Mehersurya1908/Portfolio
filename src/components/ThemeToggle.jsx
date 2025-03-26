import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-500 text-white p-3 rounded-lg shadow-lg"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}
