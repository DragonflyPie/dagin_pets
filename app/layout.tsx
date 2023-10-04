import "./globals.css";
import type { Metadata } from "next";
import { osans, inter, lato, roboto, jakarta } from "./fonts";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BlueShape } from "./components/vectors";
import line from "../public/line.png";
import ContactModal from "./ContactModal";
import Image from "next/image";

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
      className={`scroll-smooth ${osans.variable} ${jakarta.variable} ${inter.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body className="flex w-full flex-col items-center overflow-x-hidden  bg-white font-osans text-blackish">
        <Navbar />
        {children}
        <Footer />
        <div className="absolute -left-[20px] top-[9rem] -z-10 origin-left scale-[40%] md:-left-[34px] md:top-[40rem]  md:scale-100  lg:top-[95vh]">
          <BlueShape />
        </div>
      </body>
    </html>
  );
}
