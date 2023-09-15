import "./globals.css";
import type { Metadata } from "next";
import { osans, inter, lato, roboto, jakarta } from "./fonts";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Paw } from "./vectors";
import { Plane } from "./icons";

export const metadata: Metadata = {
  title: "Dagin Pets",
  description: "Перевозка питомцев в ОАЭ",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // className={`${jakarta.variable} ${lato.variable} ${inter.variable}`}
      className={` scroll-smooth ${osans.variable} ${jakarta.variable} ${inter.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body className="flex w-full flex-col items-center overflow-x-hidden bg-white font-jakarta text-blackish">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
