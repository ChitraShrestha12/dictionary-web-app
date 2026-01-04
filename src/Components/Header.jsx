import React, { useContext, useEffect } from "react";
import Logo from "../assets/logo.svg?react";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegSun } from "react-icons/fa6";
import { PreferencesContext } from "../context/PreferencesContext";
import FontSwitcherMenu from "./FontSwitcherMenu";

function Header() {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  useEffect(() => {
    document.body.classList.toggle("dark-mode", preferences.isDark);
  }, [preferences.isDark]);
  function updateDarkPreference() {
    setPreferences((prev) => ({ ...prev, isDark: !prev.isDark }));
  }
  return (
    <header>
      <div className="logo-container">
        <Logo alt="Website Logo" />
      </div>
      <nav className="header-controls">
        <div className="font-switcher-container">
          <FontSwitcherMenu />
        </div>
        <p className="vertical-line">|</p>
        <button className="theme-switcher" onClick={updateDarkPreference}>
          {!preferences.isDark ? (
  <IoMoonOutline className="moon-icon theme-switcher-icon" />
) : (
  <FaRegSun className="sun-icon theme-switcher-icon" />
)}
        </button>
      </nav>
    </header>
  );
}

export default Header;
