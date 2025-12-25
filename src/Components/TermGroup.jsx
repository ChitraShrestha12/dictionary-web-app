import React from "react";

function TermGroup({ findTerm, termTitle }) {
  return (
    <div className="term-section">
      <h2 className="term-title">{termTitle}</h2>
      <div className="term-words">
        {findTerm?.map((findTerm, i) => (
          <span key={i}>{findTerm}</span>
        ))}
      </div>
    </div>
  );
}

export default TermGroup;
