import React from "react";
import { useLanguage } from "../../contextAPI/LanguageContext";

function Language() {
  const { Language, setLanguage } = useLanguage();

  return (
    <div>
      {Language === "tr" ? (
        <p>
          Switch to{" "}
          <button
            onClick={() => setLanguage("en")}
            id="language-english"
            className="language-toggle text-[#e92577] font-bold cursor-pointer"
            aria-label="Switch to English to view the site in English"
            role="button"
            tabIndex="0"
          >
            English
          </button>
        </p>
      ) : (
        <p>
          <button
            onClick={() => setLanguage("tr")}
            className="language-toggle text-[#e92577] font-bold cursor-pointer"
            aria-label="Türkçe'ye geçiş yaparak siteyi ana dilinizde görüntüleyin"
            role="button"
            tabIndex="0"
          >
            Türkçe
          </button>
          'ye Geçiş Yap
        </p>
      )}
    </div>
  );
}

export default Language;
