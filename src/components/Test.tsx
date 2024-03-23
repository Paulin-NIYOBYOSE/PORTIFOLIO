import React, { useState } from "react";

const ThemeChanger: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    updateTheme();
  };

  const updateTheme = () => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--text-color", "black");
      root.style.setProperty("--button-bg-color", "#1a202c"); // Dark mode button background color
    } else {
      root.style.setProperty("--bg-color", "black");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--button-bg-color", "#f7fafc"); // Light mode button background color
    }
  };

  return (
    <div className="fixed bottom-0 right-0 p-4">
      <button
        onClick={toggleTheme}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        style={{ backgroundColor: isDarkMode ? "#1a202c" : "#f7fafc" }} // Set button background color dynamically
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeChanger;
