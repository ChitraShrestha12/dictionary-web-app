import React from "react";
import WordPronunciation from "../Components/WordPronunciation";
import DefinitionMeaning from "../Components/DefinitionMeaning";

function DefinitionPage({ fetchedData }) {
  return (
    <section className="meaning-page">
      <WordPronunciation fetchedData={fetchedData} />
      <DefinitionMeaning fetchedData={fetchedData}/>
    </section>
  );
}

export default DefinitionPage;
