import "../globals.css";
import type { Metadata } from "next";
import { BlueShape } from "../_components/commons/vectors";
import Footer from "../_components/footer/Footer";
import Navbar from "../_components/navbar/Navbar";
import { futura, raleway, geometria } from "../_utilities/fonts";
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "../_utilities/getDictionary";
import FacebookPixel from "../_utilities/metrics/FacebookPixel";
import Script from "next/script";
import { Suspense } from "react";
import YandexMetrika from "../_utilities/metrics/YandexMetrika";
import Image from "next/image";
import "@/app/_utilities/slick.css";

const YandexID = process.env.YANDEX_ID;

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
      <body
        className="flex w-full flex-col items-center overflow-x-hidden  bg-white font-raleway text-gray-dark"
        suppressHydrationWarning
      >
        <Navbar lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
        <div className="absolute -left-[20px] top-[9rem] -z-10 origin-left scale-[40%] md:-left-[34px] md:top-[40rem]  md:scale-100  lg:top-[95vh]">
          <BlueShape />
        </div>
        <FacebookPixel />
        <Script id="metrika-counter" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(${YandexID}, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
        </Script>
        <noscript>
          <div>
            <Image
              src="https://mc.yandex.ru/watch/96556201"
              className="absolute left-full"
              alt=""
              width={1}
              height={1}
            />
          </div>
        </noscript>

        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  );
}
