import React, { createContext, useEffect, useState } from "react";

export const PreferencesContext = createContext();
export function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState({
    isDark: localStorage.getItem("theme") === "true",
    font: localStorage.getItem("font"),
    userWord: "",
  });

  useEffect(() => {
    localStorage.setItem("theme", preferences.isDark);
    document.body.style.fontFamily = preferences.font;
    localStorage.setItem("font", preferences.font);
  }, [preferences.isDark, preferences.font]);

  return (
    <PreferencesContext.Provider value={{ preferences, setPreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
}
