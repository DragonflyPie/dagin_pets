import { Inter, Open_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const lato = localFont({
  src: [
    {
      path: "../../public/fonts/Lato-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lato-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-lato",
});

export const jakarta = localFont({
  src: "../../public/fonts/PlusJakartaSans[wght].ttf",
  display: "swap",
  variable: "--font-jakarta",
});
// export const jakarta = Plus_Jakarta_Sans({
//   subsets: ["latin", "cyrillic-ext"],
//   variable: "--font-jakarta",
// });

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const osans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-osans",
});

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});
