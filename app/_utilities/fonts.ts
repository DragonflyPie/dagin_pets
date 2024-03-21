import { Raleway } from "next/font/google";
import localFont from "next/font/local";

export const geometria = localFont({
  preload: false,
  src: [
    {
      path: "../../public/fonts/geometria-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geometria-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-geometria",
});

export const futura = localFont({
  preload: false,
  src: [
    {
      path: "../../public/fonts/FuturaMediumC.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-futura",
});

export const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
});
