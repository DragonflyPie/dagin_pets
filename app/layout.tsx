import "./globals.css";
import type { Metadata } from "next";
import { osans, inter, lato, roboto, jakarta } from "./fonts";

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
      className={`${osans.variable} ${jakarta.variable} ${inter.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body className="bg-white text-blackish">{children}</body>
    </html>
  );
}
