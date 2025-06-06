import React, { useState } from "react";
import "../assets/HelloWorldPage.css";

export default function HelloWorldPage() {
  const [name, setName] = useState("");
  const [langIndex, setLangIndex] = useState(0);
  const LanguageData = [
    {
      id: 1,
      name: "English",
      greeting: "Hello",
      region: "Global",
      color: "#000000",
    },
    {
      id: 11,
      name: "Hindi",
      greeting: "नमस्ते",
      region: "North India",
      color: "#FF9933",
    },
    {
      id: 2,
      name: "Tamil",
      greeting: "வணக்கம்",
      region: "Tamil Nadu",
      color: "#138808",
    },
    {
      id: 3,
      name: "Bengali",
      greeting: "নমস্কার",
      region: "West Bengal",
      color: "#FF6B6B",
    },
    {
      id: 4,
      name: "Telugu",
      greeting: "నమస్కారం",
      region: "Andhra Pradesh & Telangana",
      color: "#4DABF7",
    },
    {
      id: 5,
      name: "Kannada",
      greeting: "ನಮಸ್ಕಾರ",
      region: "Karnataka",
      color: "#FCC419",
    },
    {
      id: 6,
      name: "Malayalam",
      greeting: "നമസ്കാരം",
      region: "Kerala",
      color: "#40C057",
    },
    {
      id: 7,
      name: "Marathi",
      greeting: "नमस्कार",
      region: "Maharashtra",
      color: "#7950F2",
    },
    {
      id: 8,
      name: "Gujarati",
      greeting: "નમસ્તે",
      region: "Gujarat",
      color: "#FA5252",
    },
    {
      id: 9,
      name: "Punjabi",
      greeting: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
      region: "Punjab",
      color: "#228BE6",
    },
    {
      id: 10,
      name: "Odia",
      greeting: "ନମସ୍କାର",
      region: "Odisha",
      color: "#BE4BDB",
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
