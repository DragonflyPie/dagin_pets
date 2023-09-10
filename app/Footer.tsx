import Image from "next/image";
import Contact from "./Contact";
import { WhatsApp, Telegram } from "./icons";
import dog_with_phone_img from "../public/dog_with_phone.png";

const Footer = () => {
  return (
    <div className="relative m-auto flex h-48 w-full flex-col justify-between  rounded-tr-full bg-dark-gray p-4 text-white text-white md:pb-6 lg:h-60 lg:p-8 xl:p-12  ">
      <div className="flex justify-between lg:items-center">
        <h3 className=" whitespace-pre font-osans text-lg text-xl/[4rem] sm:text-2xl/[3rem] lg:text-3xl/[3rem] xl:text-4xl/[150%]">
          {`По всем вопросам \nобращайтесь`}
        </h3>
        <div className="flex grow flex-col items-center justify-around pr-10 font-inter font-light sm:text-lg md:flex-row md:text-xl lg:pr-[300px] xl:text-2xl ">
          <Contact info="@AtesttestBtestest" icon={<Telegram />} />
          <Contact info="+9876543210" icon={<WhatsApp />} />
        </div>
      </div>
      <div className="flex justify-between font-inter text-sm font-extralight">
        <p>Dagin Pets Relocation ©</p>
        <p>2023</p>
      </div>
      <div className="absolute bottom-0 hidden w-[331px] lg:right-10 lg:block xl:right-32">
        <Image src={dog_with_phone_img} alt={"Dog with a phone"} />
      </div>
    </div>
  );
};

export default Footer;
