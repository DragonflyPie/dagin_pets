import "server-only";

import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("../_i18n/en.json").then((module) => module.default),
  ru: () => import("../_i18n/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
