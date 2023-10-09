"use client";

import { useRef, useState } from "react";
import { Down } from "../commons/icons";
import useClickOutside from "../../_utilities/hooks/useClickOutside";
import { Locale, i18n } from "@/i18n.config";
import { useParams, useRouter } from "next/navigation";

const LanguageSelector = () => {
  const params = useParams();
  const router = useRouter();
  const currentLocale = params.lang as Locale;
  const locales = i18n.locales;
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const chooseLanguage = (locale: Locale) => {
    setIsOpen(false);
    router.push(`/${locale}`);
  };

  const languageRef = useRef<HTMLDivElement>(null);

  useClickOutside(languageRef, closeMenu);
  return (
    <div
      className="relative flex h-8 w-16 shrink-0 cursor-pointer items-center justify-center p-2  "
      ref={languageRef}
    >
      <div
        onClick={toggleMenu}
        className={`absolute -top-1 flex gap-1.5  rounded-[6px] p-2 transition-colors duration-500  ${
          isOpen ? "bg-blue-light" : "bg-inherit"
        }`}
      >
        {isOpen ? (
          <ul className="flex flex-col gap-2">
            {locales.map((locale) => (
              <li
                key={locale}
                onClick={() => chooseLanguage(locale as Locale)}
                className="cursor-pointer underline-offset-2 hover:underline"
              >
                {locale.toUpperCase()}
              </li>
            ))}
          </ul>
        ) : (
          <div className="cursor-pointer">{currentLocale.toUpperCase()}</div>
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
