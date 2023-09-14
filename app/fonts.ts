import { Plus_Jakarta_Sans, Inter, Open_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const lato = localFont({
  src: "../fonts/Lato-Heavy.woff2",
  display: "swap",
  weight: "600",
  variable: "--font-lato",
});

// export const jakarta = localFont({
//   src: "../fonts/PlusJakartaSans-Regular.woff2",
//   display: "swap",
//   variable: "--font-jakarta",
// });
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-jakarta",
});

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
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
