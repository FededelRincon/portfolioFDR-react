import React, { createContext, useContext, useEffect, useState } from "react";
import { es } from "../i18n/es";
import { en } from "../i18n/en";

const dictionaries = { es, en };

const LanguageContext = createContext();

const getInitialLang = () => {
  const saved =
    typeof localStorage !== "undefined" && localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  const browser =
    typeof navigator !== "undefined" ? navigator.language || "" : "";
  return browser.toLowerCase().startsWith("es") ? "es" : "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = { lang, setLang, t: dictionaries[lang] };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext);
