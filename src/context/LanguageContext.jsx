import { createContext, useState } from "react";
import en from "../languages/en";
import hi from "../languages/hi";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const savedLang = localStorage.getItem("lang") || "en";
  const [lang, setLang] = useState(savedLang);

  const translations = {
    en,
    hi,
  };

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ t: translations[lang], lang, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
