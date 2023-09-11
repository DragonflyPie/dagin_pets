import "./globals.css";
import type { Metadata } from "next";
import { osans, inter, lato } from "./fonts";

export const metadata: Metadata = {
  title: "Dagin Pets",
  description: "Перевозка питомцев в ОАЭ",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicons/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicons/apple-touch-icon.png",
    },
    {
      rel: "icon",
      url: "/favicons/android-chrome-192x192.png",
      type: "image/png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      url: "/favicons/android-chrome-512x512.png",
      type: "image/png",
      sizes: "512x512",
    },
  ],
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
