import "../globals.css";
import type { Metadata } from "next";
import { BlueShape } from "../_components/commons/vectors";
import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";
import { futura, raleway, geometria } from "../_utilities/fonts";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "../_utilities/getDictionary";

type Props = {
  params: { lang: Locale };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    title: `${dictionary.meta.title}`,
    description: `${dictionary.meta.description}`,
    manifest: "@/app/manifest.webmanifest",
    robots: "@/app/robots.txt",
    themeColor: "#fff",
    colorScheme: "light",
  };
}

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
      className={`scroll-smooth ${futura.variable} ${geometria.variable} ${raleway.variable}`}
    >
      <body className="flex w-full flex-col items-center overflow-x-hidden  bg-white bg-dog-pattern bg-repeat font-raleway text-gray-dark">
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
