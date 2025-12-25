import React, { useContext } from "react";
import TermGroup from "./TermGroup";
import { PreferencesContext } from "../context/PreferencesContext";
import { getAntonyms, getSynonyms } from "../utils/wordHelpers";
import SpeechList from "./SpeechList";

function DefinitionMeaning({ fetchedData }) {
  const { preferences, setPreferences } = useContext(PreferencesContext);
  const antonyms = getAntonyms(fetchedData);
  const synonyms = getSynonyms(fetchedData);

  return (
    <div className="definitions-meaning-section">
      <SpeechList fetchedData={fetchedData}/>
      <TermGroup findTerm={antonyms} termTitle={"Antonym"} />
      <TermGroup findTerm={synonyms} termTitle={"Synonym"} />
      <div className="source-link-section">
        <hr />
        <div className="source-link">
          <p>Source</p>
          <div className="link-section">
            {fetchedData[0]?.sourceUrls?.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                className={preferences.isDark ? "anchor-dark" : ""}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefinitionMeaning;
