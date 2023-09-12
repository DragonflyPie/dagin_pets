import "./globals.css";
import type { Metadata } from "next";
import { osans, inter, lato } from "./fonts";

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
      className={`${osans.variable} ${inter.variable} ${lato.variable}`}
    >
      <body className="bg-white text-blackish">{children}</body>
    </html>
  );
}
