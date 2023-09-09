import Image from "next/image";
import pets_walking from "../public/dog_and_cat.png";
import logo from "../public/logo_with_text.png";
import Button from "./Button";
import { DottedLine, Paw } from "./vectors";

const Welcome = () => {
  return (
    <div className="min-h-screen flex">
      <div className="absolute left-16">
        <Image src={logo} alt="DaginPets Logo" width={120} />
      </div>
      <div className="flex pt-24 items-center ">
        <div className="flex flex-col gap-10 ">
          <h1 className="font-lato text-5xl md:text-6xl lg:text-[80px] whitespace-pre-wrap leading-[1.1] tracking-[0.8px]">
            {`Приветствуем вас,\nдорогие любители\nживотных!`}
          </h1>
          <p className="text-2xl">
            Вам нужно перевезти своего питомца в ОАЭ или из ОАЭ? Компания Dagin
            Pets Relocation рада предложить вам свою помощь: услуги по
            транспортировке животных, а также пет такси на территории ОАЭ.
          </p>
          <Button />
        </div>
        <div className="">
          <Image src={pets_walking} alt="Dog and cat walking" />
        </div>
        <div className="absolute top-[2vh] left-[33vw]">
          <Paw />
        </div>
        <div className="absolute bottom-[10vh] left-1/2 rotate-45">
          <Paw />
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <DottedLine />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
