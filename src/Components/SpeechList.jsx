import React from "react";
import HorizentalLine from "../assets/horizental-line.svg?react";

function SpeechList({ fetchedData }) {
  const seenParts = new Set();
  return fetchedData[0]?.meanings
    ?.filter((speech) => {
      if (seenParts.has(speech.partOfSpeech)) return false;
      seenParts.add(speech.partOfSpeech);
      return true;
    })
    .map((speech, i) => {
      return (
        <React.Fragment key={i}>
          <div className="part-of-speech">
            <span>{speech?.partOfSpeech}</span>
            <HorizentalLine className="horizental-svg" />
          </div>
          <div className="meanings-section">
            <p className="meaning-title">Meaning</p>
            <ul className="meaning-list">
              {speech?.definitions?.map((definitionObj, i) => (
                <li key={i}>{definitionObj?.definition}</li>
              ))}
            </ul>
          </div>
        </React.Fragment>
      );
    });
}

export default SpeechList;
