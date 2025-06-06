import React, { useState } from "react";
import "../assets/Languages.css";
import { Program } from "../utils/program";

export default function Programming() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container">
      <h1 className="heading-program">
        <b style={{ color: "blue" }}>Hello World </b>in Different Languages
      </h1>
      <p>
        From Silicon Valley to Tokyo, developers around the world start their
        journey with these simple words.
      </p>
      <h2 className="title">Click a Language to See Code</h2>

      {/* Language tiles */}
      <div className="tiles">
        {Program.map((lang) => (
          <div
            key={lang.id}
            className="tile"
            style={{ borderColor: lang.color }}
            onClick={() => setSelectedLanguage(lang)}
          >
            <img src={lang.image} alt={lang.name} className="lang-icon" />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>

      {/* Selected language details */}
      {selectedLanguage && (
        <div
          className="code-box"
          style={{ borderColor: selectedLanguage.color }}
        >
          <h3 style={{ color: selectedLanguage.color }}>
            {selectedLanguage.name}
          </h3>
          <p className="fact">Created in: {selectedLanguage.year}</p>
          <pre>
            <code>{selectedLanguage.snippet}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
