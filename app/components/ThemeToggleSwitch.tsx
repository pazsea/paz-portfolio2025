"use client";

import React from "react";
import { useGlobal } from "../context/GlobalContext";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const ThemeToggleSwitch = () => {
  const { theme, toggleTheme } = useGlobal();

  const isDarkMode = theme === "dark";
  return (
    <label>
      <input
        className="toggle-checkbox"
        type="checkbox"
        title="Toggle theme"
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <div className="toggle-slot">
        <div className="sun-icon-wrapper">
          <SunIcon />
        </div>
        <div className="toggle-button" />
        <div className="moon-icon-wrapper">
          <MoonIcon />
        </div>
      </div>
    </label>
  );
};

export default ThemeToggleSwitch;
