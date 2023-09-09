import Image from "next/image";
import Contact from "./Contact";
import { WhatsApp, Telegram } from "./icons";
import dog_with_phone_img from "../public/dog_with_phone.png";

const Footer = () => {
  return (
    <div className="w-full flex relative text-white flex-col justify-between  md:p-12 m-auto md:pb-6 h-60 p-6 bg-dark-gray text-white rounded-tr-full  ">
      <div className="flex w-[calc(100%-350px)] justify-between">
        <h3 className=" shrink-0 font-open whitespace-pre grow ">
          {`По всем вопросам \nобращайтесь`}
        </h3>
        <div className="flex flex-col lg:flex-row font-inter text-2xl grow font-light  justify-between ">
          <Contact info="@AnastasiaBelykh" icon={<Telegram />} />
          <Contact info="+971585441452" icon={<WhatsApp />} />
        </div>
      </div>
      <div className="flex justify-between text-sm font-extralight font-inter">
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
