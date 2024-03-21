import { Locale } from "@/i18n.config";
import Messenger from "../commons/Messenger";
import {
  Telegram,
  Instagram,
  PhoneWhite,
  WhatsAppWhite,
} from "../commons/icons";
import FooterNavigation from "./FooterNavigation";
import { getDictionary } from "@/app/_utilities/getDictionary";
import MessengerItems from "../commons/MessengerItems";

interface FooterProps {
  lang: Locale;
}

const Footer = async ({ lang }: FooterProps) => {
  const { footer } = await getDictionary(lang);

  return (
    <footer id="contacts" className="flex w-full justify-center bg-gray-bg">
      <div className="flex w-full max-w-[1440px] flex-col justify-between p-4 px-4 pb-6 pt-12 text-white md:pb-12 xl:gap-14 xl:px-20 xl:py-16">
        <div className="flex flex-col justify-between pb-12 md:flex-row md:items-center md:pb-14 xl:pb-0">
          <h4 className="shrink-0 pb-6 font-geometria text-xl/[150%] xs:w-[21rem] md:whitespace-pre md:pb-0 md:text-3xl/[160%] xl:text-4xl/[160%]">
            {footer.footer_title}
          </h4>
          <ul className=" grid grid-cols-1 gap-y-6 text-base font-light  md:grid-cols-2 md:justify-between md:gap-x-10 md:gap-y-10 md:text-xl lg:gap-4 xl:gap-x-36 xl:text-2xl">
            <MessengerItems />
          </ul>
        </div>
        <hr className="hidden border-gray-form xl:block" />
        <div className="flex w-full flex-col justify-between gap-[1.875rem] text-sm md:flex-row md:items-end">
          <ul className="grid grid-flow-row grid-cols-3 gap-6 md:gap-x-8 xl:flex xl:gap-6 2xl:gap-12">
            <FooterNavigation lang={lang} />
          </ul>
          <p className=" text-[0.625rem] font-extralight md:text-right md:text-sm">
            Dagin Pets Relocation © Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
