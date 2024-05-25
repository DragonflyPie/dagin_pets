import { Locale } from "@/i18n.config";
import FooterNavigation from "./FooterNavigation";
import { getDictionary } from "@/app/_utilities/getDictionary";
import MessengerItems from "../commons/MessengerItems";
import { getCurrentYear } from "@/app/_utilities/getYear";

interface FooterProps {
  lang: Locale;
}

const Footer = async ({ lang }: FooterProps) => {
  const { footer } = await getDictionary(lang);

  const currentYear = getCurrentYear();

  return (
    <footer id="contacts" className="flex w-full justify-center bg-gray-bg">
      <div className="flex w-full max-w-[1440px] flex-col justify-between gap-4 p-4 px-4 pb-6 pt-12 text-white md:gap-10 md:pb-12 xl:gap-14 xl:px-20 xl:py-16">
        <div className="flex  flex-col justify-between md:flex-row md:items-center">
          <h4 className="shrink-0  pb-6 font-geometria text-xl/[1.875rem] xs:w-[21rem] md:whitespace-pre md:pb-0 md:text-3xl/[3.5rem] xl:text-4xl/[3.5rem]">
            {footer.footer_title}
          </h4>
          <ul className="flex flex-col justify-center gap-y-6 text-base font-light md:h-44 md:flex-wrap md:gap-x-8 md:pr-16 md:text-xl lg:gap-x-16 xl:text-2xl">
            <MessengerItems />
          </ul>
        </div>
        <hr className="border-gray-form md:hidden xl:block" />
        <div className="flex w-full flex-col justify-between gap-[1.875rem] text-xs xs:text-sm md:flex-row md:items-end">
          <ul className="grid grid-flow-row grid-cols-3 gap-x-0 gap-y-6 md:gap-x-8 xl:flex xl:gap-6 2xl:gap-12">
            <FooterNavigation lang={lang} />
          </ul>
          <p className=" text-[0.625rem] font-extralight md:text-right md:text-sm">
            Dagin Pets Relocation © Copyright {currentYear}. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
