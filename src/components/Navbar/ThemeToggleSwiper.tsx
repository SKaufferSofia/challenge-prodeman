import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleSwiper = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer w-16 h-8 flex items-center px-1 rounded-full transition-colors duration-300 ${
        isDark ? "bg-redPrimary" : "bg-background"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full bg-secondaryWhite shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          isDark ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <FaMoon className="w-4 h-4 text-redPrimary" />
        ) : (
          <FaSun className="w-4 h-4 text-textPrimary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggleSwiper;
