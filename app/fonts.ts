import { Plus_Jakarta_Sans, Inter, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

export const lato = localFont({
  src: "../fonts/Lato-Heavy.woff2",
  display: "swap",
  variable: "--font-lato",
});

// export const jakarta = localFont({
//   src: "../fonts/PlusJakartaSans-Regular.woff2",
//   display: "swap",
//   variable: "--font-jakarta",
// });

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const osans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-osans",
});
