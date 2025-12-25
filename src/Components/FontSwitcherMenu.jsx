import React, { useContext} from "react";
import { PreferencesContext } from "../context/PreferencesContext";

function FontSwitcherMenu() {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  function fontHandler(e) {
    const { value } = e.target;
    setPreferences((prev) => ({ ...prev, font: value }));
  }

  return (
    <select
      value={preferences.font}
      onChange={fontHandler}
      name="fonts"
      className={`font-switcher-menu ${preferences.isDark ? "dark" : ""}`}
    >
      <option value="sans-serif">Sans Serif</option>
      <option value="serif">Serif</option>
      <option value="mono">Mono</option>
    </select>
  );
}

export default FontSwitcherMenu;
