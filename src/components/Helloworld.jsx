import React, { useState } from "react";
import "../assets/HelloWorldPage.css";

export default function HelloWorldPage() {
  const [name, setName] = useState("");
  const [langIndex, setLangIndex] = useState(0);
  const LanguageData = [
    { name: "English", greeting: "Hello", region: "Global", color: "#000000" },
    { name: "Hindi", greeting: "नमस्ते", region: "India", color: "#FF5722" },
    {
      name: "Tamil",
      greeting: "வணக்கம்",
      region: "Tamil Nadu",
      color: "#4CAF50",
    },
    {
      name: "Bengali",
      greeting: "নমস্কার",
      region: "West Bengal",
      color: "#2196F3",
    },
    {
      name: "Telugu",
      greeting: "నమస్కారం",
      region: "Andhra Pradesh",
      color: "#FF9800",
    },
    {
      name: "Kannada",
      greeting: "ನಮಸ್ಕಾರ",
      region: "Karnataka",
      color: "#9C27B0",
    },
    {
      name: "Malayalam",
      greeting: "നമസ്കാരം",
      region: "Kerala",
      color: "#3F51B5",
    },
    {
      name: "Marathi",
      greeting: "नमस्कार",
      region: "Maharashtra",
      color: "#E91E63",
    },
    {
      name: "Gujarati",
      greeting: "નમસ્તે",
      region: "Gujarat",
      color: "#8BC34A",
    },
  ];
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
