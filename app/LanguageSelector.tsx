"use client";
import { useRef, useState } from "react";
import { Down } from "./icons";
import useClickOutside from "./hooks/useClickOutside";

type LanguageOptions = "RU" | "EN";

const LanguageSelector = () => {
  const [lang, setLang] = useState<LanguageOptions>("RU");
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const chooseLanguage = (language: LanguageOptions) => {
    setLang(language);
    setIsOpen(false);
  };

  const languages = lang === "EN" ? ["EN", "RU"] : ["RU", "EN"];

  const languageRef = useRef<HTMLDivElement>(null);

  useClickOutside(languageRef, closeMenu);
  return (
    <div className="gap relative flex h-6 w-8 " ref={languageRef}>
      <div
        onClick={toggleMenu}
        className={`absolute -top-4 flex gap-[6px] rounded-[6px] p-3 transition-colors duration-500 ${
          isOpen ? "bg-light-blue" : "bg-inherit"
        }`}
      >
        {isOpen ? (
          <ul className="flex flex-col gap-2">
            {languages.map((language) => (
              <li
                key={language}
                onClick={() => chooseLanguage(language as LanguageOptions)}
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                {language}
              </li>
            ))}
          </ul>
        ) : (
          <div className="cursor-pointer">{lang}</div>
        )}
        <div
          className={`mb-auto ${
            isOpen ? "rotate-180" : ""
          } cursor-pointer transition-all duration-200`}
        >
          <Down />
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
