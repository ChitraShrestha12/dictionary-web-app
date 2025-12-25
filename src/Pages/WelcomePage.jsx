import React from "react";
import Logo from "../assets/logo.svg?react";

function WelcomePage() {
  return (
    <>
      <div className="home-logo">
        <Logo />
      </div>
      <div className="welcome-title-info">
        <h2>Welcome to Dictionary App</h2>
        <p>Start searching for any word...</p>
      </div>
    </>
  );
}

export default WelcomePage;
