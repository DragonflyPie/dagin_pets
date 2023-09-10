import Image from "next/image";
import Contact from "./Contact";
import { WhatsApp, Telegram } from "./icons";
import dog_with_phone_img from "../public/dog_with_phone.png";

const Footer = () => {
  return (
    <div className="relative m-auto flex h-60 w-full flex-col  justify-between rounded-tr-full bg-dark-gray p-6 text-white text-white md:p-12 md:pb-6  ">
      <div className="flex w-[calc(100%-350px)] justify-between">
        <h3 className=" font-open shrink-0 grow whitespace-pre ">
          {`По всем вопросам \nобращайтесь`}
        </h3>
        <div className="flex grow flex-col justify-between font-inter text-2xl font-light  lg:flex-row ">
          <Contact info="@AtesttestBtestest" icon={<Telegram />} />
          <Contact info="+9876543210" icon={<WhatsApp />} />
        </div>
      </div>
      <div className="flex justify-between font-inter text-sm font-extralight">
        <p>Dagin Pets Relocation ©</p>
        <p>2023</p>
      </div>
      <div className="absolute bottom-0 right-16 w-[330px]">
        <Image src={dog_with_phone_img} alt={"Dog with a phone"} />
      </div>
    </div>
  );
};

export default Footer;
