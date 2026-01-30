import React, { useEffect, useState } from "react";
import "./Generator.css";
import words from "../../data/wordlist-en.json";

const Generator = ({ glow }) => {
  /* =====================
     STATES
  ===================== */
  const [type, setType] = useState(localStorage.getItem("type") || "password");
  const [length, setLength] = useState(
    Number(localStorage.getItem("length")) || 16,
  );
  const [password, setPassword] = useState("");
  const [tipsMinimized, setTipsMinimized] = useState(false);
  const [animateBorder, setAnimateBorder] = useState(false);

  const getGlowClass = () => {
    if (strengthLabel === "Weak") return "glow-weak";
    if (strengthLabel === "Medium") return "glow-medium";
    return "glow-strong";
  };

  const triggerGlow = () => {
    setAnimateBorder(true);
    setTimeout(() => setAnimateBorder(false), 3500);
  };
  useEffect(() => {
    if (glow) triggerGlow();
  }, [glow]);

  // Password switches
  const [useUpper, setUseUpper] = useState(
    JSON.parse(localStorage.getItem("useUpper")) ?? true,
  );
  const [useLower, setUseLower] = useState(
    JSON.parse(localStorage.getItem("useLower")) ?? true,
  );
  const [useNumber, setUseNumber] = useState(
    JSON.parse(localStorage.getItem("useNumber")) ?? true,
  );
  const [useSymbol, setUseSymbol] = useState(
    JSON.parse(localStorage.getItem("useSymbol")) ?? true,
  );

  // Passphrase options
  const [separator, setSeparator] = useState(
    localStorage.getItem("separator") || "-",
  );
  const [capitalize, setCapitalize] = useState(
    JSON.parse(localStorage.getItem("capitalize")) || false,
  );

  // Popup
  const [showTips, setShowTips] = useState(true);

  /* =====================
     CHAR SETS
  ===================== */
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?/";

  /* =====================
     GENERATE
  ===================== */
  const generatePassword = () => {
    let result = "";

    // PIN
    if (type === "pin") {
      for (let i = 0; i < length; i++) {
        result += numbers[Math.floor(Math.random() * numbers.length)];
      }
      setPassword(result);
      return;
    }

    // PASSPHRASE
    if (type === "phrase") {
      const phrase = Array.from({ length }, () => {
        let word = words[Math.floor(Math.random() * words.length)];
        if (capitalize) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      }).join(separator);

      setPassword(phrase);
      return;
    }

    // PASSWORD
    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumber) chars += numbers;
    if (useSymbol) chars += symbols;

    if (!chars) {
      setPassword("");
      return;
    }

    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    setPassword(result);
  };

  /* =====================
     AUTO GENERATE
  ===================== */
  useEffect(() => {
    generatePassword();
  }, [
    type,
    length,
    useUpper,
    useLower,
    useNumber,
    useSymbol,
    separator,
    capitalize,
  ]);

  /* =====================
     SAVE SETTINGS
  ===================== */
  useEffect(() => {
    localStorage.setItem("type", type);
    localStorage.setItem("length", length);
    localStorage.setItem("useUpper", useUpper);
    localStorage.setItem("useLower", useLower);
    localStorage.setItem("useNumber", useNumber);
    localStorage.setItem("useSymbol", useSymbol);
    localStorage.setItem("separator", separator);
    localStorage.setItem("capitalize", capitalize);
  }, [
    type,
    length,
    useUpper,
    useLower,
    useNumber,
    useSymbol,
    separator,
    capitalize,
  ]);

  /* =====================
     COPY
  ===================== */
  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    triggerGlow(); // 🔥 AUTO GLOW ON COPY
  };

  /* =====================
     STRENGTH LOGIC
  ===================== */
  const getStrengthScore = () => {
    let score = 0;

    if (type === "password") {
      if (useUpper) score += 15;
      if (useLower) score += 15;
      if (useNumber) score += 15;
      if (useSymbol) score += 20;
      if (password.length >= 12) score += 15;
      if (/(\w)\1{2,}/.test(password)) score -= 20;
      if (/1234|abcd|qwerty/i.test(password)) score -= 30;
    }

    if (type === "phrase") {
      score += length * 15;
      score += 20; // diceware
      if (capitalize) score += 10;
      if (separator !== "-") score += 5;
    }

    if (type === "pin") {
      score = length >= 6 ? 70 : 30;
    }

    return Math.max(0, Math.min(score, 100));
  };

  const strengthScore = getStrengthScore();
  const glowIntensity = Math.min(1, strengthScore / 100);
  const strengthLabel =
    strengthScore < 40 ? "Weak" : strengthScore < 70 ? "Medium" : "Strong";

  const crackTime =
    strengthScore < 40
      ? "Seconds to minutes"
      : strengthScore < 70
        ? "Hours to days"
        : "Years to crack";

  const strengthTip =
    strengthLabel === "Weak"
      ? "Avoid patterns, add variety (symbols, words, length)."
      : strengthLabel === "Medium"
        ? "Good, but adding more randomness improves security."
        : "Excellent! This is a strong and secure choice.";

  /* =====================
     UI
  ===================== */
  return (
    <div
      className={`generator-wrapper ${
        animateBorder ? `glow ${getGlowClass()}` : ""
      }`}
      style={{
        "--glow-opacity": glowIntensity,
      }}
    >
      <div className="generator-card">
        {/* HEADER */}
        <div className="gen-header">
          <h3>Generate Password</h3>
          <div className="tabs">
            <button
              className={type === "password" ? "active" : ""}
              onClick={() => setType("password")}
            >
              Password
            </button>
            <button
              className={type === "pin" ? "active" : ""}
              onClick={() => setType("pin")}
            >
              PIN
            </button>
            <button
              className={type === "phrase" ? "active" : ""}
              onClick={() => setType("phrase")}
            >
              Passphrase
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="gen-body">
          <div className="password-display">
            <div className="password-text">{password || "—"}</div>
          </div>

          <div className="display-actions">
            <button onClick={generatePassword}>⟳ Refresh</button>
            <button onClick={copyToClipboard}>📋 Copy</button>
          </div>

          {/* LENGTH */}
          <div className="length-control">
            <button
              onClick={() =>
                setLength((l) => Math.max(type === "phrase" ? 2 : 4, l - 1))
              }
            >
              −
            </button>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <button onClick={() => setLength((l) => l + 1)}>+</button>
          </div>

          <input
            type="range"
            min={type === "phrase" ? 2 : 4}
            max={type === "phrase" ? 8 : 100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="length-slider"
          />

          {/* SWITCHES */}
          {type === "password" && (
            <div className="options">
              <Switch
                label="Uppercase"
                value={useUpper}
                setValue={setUseUpper}
              />
              <Switch
                label="Lowercase"
                value={useLower}
                setValue={setUseLower}
              />
              <Switch
                label="Numbers"
                value={useNumber}
                setValue={setUseNumber}
              />
              <Switch
                label="Symbols"
                value={useSymbol}
                setValue={setUseSymbol}
              />
            </div>
          )}

          {type === "phrase" && (
            <div className="options">
              <div className="switch-row">
                <span>Capitalize</span>
                <Switch value={capitalize} setValue={setCapitalize} />
              </div>
              <div className="switch-row">
                <span>Separator</span>
                <select
                  value={separator}
                  onChange={(e) => setSeparator(e.target.value)}
                >
                  <option value="-">-</option>
                  <option value="_">_</option>
                  <option value=" ">Space</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* =====================
    STRENGTH SECTION
===================== */}
        <div className="strength-section">
          {/* ROW 1: Strength */}
          <div className="strength-row">
            <div className={`strength-label ${strengthLabel.toLowerCase()}`}>
              {strengthLabel}
            </div>

            <div className="strength-bar">
              <div
                className={`bar ${strengthLabel.toLowerCase()}`}
                style={{ width: `${strengthScore}%` }}
              />
            </div>
          </div>

          {/* ROW 2: Time to crack */}
          <div className="crack-row">
            ⏱ <span>Time to crack:</span>
            <strong className={strengthLabel.toLowerCase()}>{crackTime}</strong>
          </div>

          {/* ROW 3: Suggestions */}
          <div className={`tips-row ${strengthLabel.toLowerCase()}`}>
            {!tipsMinimized && <span>{strengthTip}</span>}

            <button
              onClick={() => setTipsMinimized(!tipsMinimized)}
              className="tips-toggle"
              title={tipsMinimized ? "Expand tips" : "Minimize tips"}
            >
              {tipsMinimized ? "＋" : "－"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =====================
   SWITCH
===================== */
const Switch = ({ label, value, setValue }) => (
  <div className="switch-row">
    {label && <span>{label}</span>}
    <div
      className={`switch ${value ? "on" : ""}`}
      onClick={() => setValue(!value)}
    >
      <div className="knob"></div>
    </div>
  </div>
);

export default Generator;
