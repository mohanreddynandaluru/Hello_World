import React, { useState } from "react";
import "../assets/HelloWorldPage.css";
import LanguageData from "../utils/Languagedata";

export default function HelloWorldPage() {
  const [name, setName] = useState("");
  const [langIndex, setLangIndex] = useState(0);

  const handlePlay = () => {
    setLangIndex((prev) => (prev + 1) % LanguageData.length);
  };

  const currentLang = LanguageData[langIndex];
  const userName = name.trim() === "" ? "World" : name;
  return (
    <div className="page-container">
      <div className="language-toggle">
        <span className="language-option">{currentLang.name}</span>
        <span className="separator">•</span>
        <span className="language-option global">{currentLang.region}</span>
      </div>

      <h1 className="heading" style={{ color: currentLang.color }}>
        {currentLang.greeting}, {userName}
      </h1>

      <div className="orange-line"></div>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        <button className="play-button" onClick={() => handlePlay()}>
          Change Language
        </button>
      </div>
      <p className="subtext">
        Experience greetings from different Indian languages
      </p>
    </div>
  );
}
