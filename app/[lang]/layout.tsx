import "../globals.css";
import type { Metadata } from "next";
import { BlueShape } from "../_components/commons/vectors";
import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";
import { inter, jakarta, lato, osans, roboto } from "../_utilities/fonts";
import { Locale, i18n } from "@/i18n.config";

export const metadata: Metadata = {
  title: "Dagin Pets",
  description: "Перевозка питомцев в ОАЭ",
  manifest: "@/app/manifest.webmanifest",
  themeColor: "#fff",
  colorScheme: "light",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html
      lang={params.lang}
      className={`scroll-smooth ${osans.variable} ${jakarta.variable} ${inter.variable} ${lato.variable} ${roboto.variable}`}
    >
      <body className="flex w-full flex-col items-center overflow-x-hidden  bg-white font-osans text-blackish">
        <Navbar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
        <div className="absolute -left-[20px] top-[9rem] -z-10 origin-left scale-[40%] md:-left-[34px] md:top-[40rem]  md:scale-100  lg:top-[95vh]">
          <BlueShape />
        </div>
      </body>
    </html>
  );
}
