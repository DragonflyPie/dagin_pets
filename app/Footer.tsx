import Messenger from "./Messenger";
import {
  Telegram,
  Instagram,
  PhoneWhite,
  WhatsAppWhite,
} from "./components/icons";
import NavItems from "./NavItems";

const Footer = () => {
  return (
    <footer id="footer" className="flex w-full justify-center bg-gray-dark">
      <div className="flex w-full max-w-[1440px] flex-col justify-between p-4 px-4 pb-6 pt-12 font-inter text-white text-white md:pb-12 xl:px-20 xl:py-16 ">
        <div className="flex flex-col justify-between pb-12 md:flex-row md:items-center md:pb-14 xl:pb-28">
          <h4 className="shrink-0 pb-6 font-osans text-xl/[150%] xs:w-[21rem] md:pb-0 md:text-4xl/[150%]">
            {`По всем вопросам обращайтесь`}
          </h4>
          <ul className=" grid grid-cols-1 gap-y-6 md:grid-cols-2 md:justify-between md:gap-x-10 md:gap-y-10 xl:gap-x-36">
            <Messenger
              link="https://t.me/AnastasiaBelykh"
              info="@AnastasiaBelykh"
              icon={<Telegram />}
            />
            <Messenger
              link="https://wa.me/send?phone=971585441452"
              info="+971585441452"
              icon={<WhatsAppWhite />}
            />
            <Messenger link="" info="+971585441452" icon={<Instagram />} />
            <Messenger
              blank={false}
              link="tel:+971585441452"
              info="+971585441452"
              icon={<PhoneWhite />}
            />
          </ul>
        </div>
        <div className="flex w-full flex-col justify-between gap-[1.875rem] text-sm font-medium md:flex-row md:items-end">
          <ul className=" grid  grid-flow-col grid-rows-3 gap-6 md:gap-x-8 xl:flex xl:gap-6 2xl:gap-12">
            <NavItems top={false} />
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
