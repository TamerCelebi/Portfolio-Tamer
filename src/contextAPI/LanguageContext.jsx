import React, { createContext, useContext, useEffect, useState } from "react";

/*

1-Browser'ın dilini alacak bir fonksiyon yazılacak.
2-Context oluşturulacak.
3-Sonucu bir setter'da tutacak.
4-UseEffect ile dil değişimi dinlenilecek.
5-Data'dan ilgili dil ile datayı çekecek.
6-Return Provider.


*/

const getBrowserLanguage = () => {
  const browserLanguage = navigator.language.slice(0, 2);
  return browserLanguage === "tr" || browserLanguage === "en"
    ? browserLanguage
    : "en";
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ setLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
