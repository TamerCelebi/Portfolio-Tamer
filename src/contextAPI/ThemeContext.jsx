import React, { createContext, useContext, useEffect, useState } from "react";
import dataJSON from "../../data.json";
import Theme from "../components/Header/Theme";
/*

1-Browser'ın dilini alacak bir fonksiyon yazılacak.
2-Context oluşturulacak.
3-Sonucu bir setter'da tutacak.
4-UseEffect ile dil değişimi dinlenilecek.
5-Data'dan ilgili dil ile datayı çekecek.
6-Return Provider.


*/

const getBrowserTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || getBrowserTheme();
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
