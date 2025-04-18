import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference stored
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#e1e1e1";
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.style.backgroundColor = "#f8f9fa";
      document.body.style.color = "#212529";
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#e1e1e1";
      setIsDarkMode(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-1 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200" 
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
