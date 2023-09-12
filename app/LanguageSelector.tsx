"use client";
import { useRef, useState } from "react";
import { Down } from "./icons";
import useClickOutside from "./hooks/useClickOutside";

type LanguageOptions = "RU" | "EN";

const LanguageSelector = () => {
  const [lang, setLang] = useState<LanguageOptions>("RU");
  const [isOpen, setIsOpen] = useState(true);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setIsOpen(true);
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
      {isOpen ? (
        <div className="bg-light-blue absolute -top-4 flex gap-[6px] rounded-[6px] p-3">
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
          <div
            className="mb-auto rotate-180 cursor-pointer"
            onClick={closeMenu}
          >
            <Down />
          </div>
        </div>
      ) : (
        <div
          className="absolute -top-4 flex cursor-pointer gap-[6px] p-3"
          onClick={openMenu}
        >
          <div className="">{lang}</div>
          <div className="">
            <Down />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
