import Contact from "./Contact";
import { Telegram, Instagram, PhoneWhite, WhatsAppWhite } from "./icons";
import NavMenu from "./NavMenu";

const Footer = () => {
  return (
    <div className="flex w-full justify-center bg-dark-gray">
      <div className="flex h-[370px] w-full max-w-[1440px] flex-col justify-between  p-4 text-white text-white lg:px-20 lg:py-16 ">
        <div className="flex items-center justify-between">
          <h3 className=" whitespace-pre font-osans text-lg text-xl/[3rem] sm:text-2xl/[3rem] lg:text-3xl/[3rem] xl:text-4xl/[150%]">
            {`По всем вопросам \nобращайтесь`}
          </h3>
          <div className="grid grid-cols-1 justify-between  gap-x-10 gap-x-[15vw] gap-y-4 font-inter font-inter md:grid-cols-[min-content_1fr] md:gap-y-10">
            <Contact link="" info="@AnastasiaBelykh" icon={<Telegram />} />
            <Contact link="" info="+971585441452" icon={<WhatsAppWhite />} />
            <Contact link="" info="+971585441452" icon={<Instagram />} />
            <Contact link="" info="+971585441452" icon={<PhoneWhite />} />
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-4 text-xs font-medium sm:text-sm lg:flex-row">
          <NavMenu />
          <p className="ml-auto font-extralight">
            Dagin Pets Relocation © Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
