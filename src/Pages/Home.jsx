import React, { useContext, useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { PreferencesContext } from "../context/PreferencesContext";
import InputField from "../Components/InputField";
import WelcomePage from "./WelcomePage";
import DictionaryDefinition from "../Components/DictionaryDefinition";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [hasError, setHasError] = useState(false);
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const handleInput = (e) => {
    const { value } = e.target;
    if (hasError && value) return setHasError(false);
    setUserInput(value);
  };
  function handleSearchClick() {
    if (!userInput.length) return setHasError(true);
    setPreferences((prev) => ({
      ...prev,
      userWord: userInput,
    }));
  }

  const keySearchClick = (e) => {
    if (e.key == "Enter") {
      handleSearchClick();
    }
  };
  return (
    <main>
      <section className={`search-bar  ${preferences.isDark ? "dark" : ""}`}>
        <InputField
          value={userInput}
          type="text"
          placeholder="Search for any word..."
          onChange={handleInput}
          onKeyDown={keySearchClick}
        />
        <IoSearchSharp className="search-icon" onClick={handleSearchClick} />
      </section>
      <div className="error-container">
        <p>{hasError && "Whoops, can’t be empty..."}</p>
      </div>
      {!preferences.userWord ? (
        <section className="welcome-section">
          <WelcomePage />
        </section>
      ) : (
        <DictionaryDefinition />
      )}
    </main>
  );
}

export default Home;
