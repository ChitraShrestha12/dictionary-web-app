import React from "react";
import ErrorSadImg from "../assets/sad-svgrepo-com.svg?react";

function NotFoundWord() {
  return (
    <section className="error-section">
      <div className="error-img">
        <ErrorSadImg alt="sad-svgrepo-com" />
      </div>
      <h2 className="error-heading">No Matching Definitions</h2>
      <p className="error-description">
        Apologies, but we couldn’t find any matching definitions. Feel free to
        try your search again or browse the web.
      </p>
    </section>
  );
}

export default NotFoundWord;
