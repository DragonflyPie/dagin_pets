import Image from "next/image";
import fat_cat from "../public/fat_cat.png";
import Button from "./Button";
import plane from "../public/plane_test2.png";
import { DottedLine, Paw } from "./vectors";
import Navbar from "./Navbar";

const Welcome = () => {
  return (
    // {/* <div className="flex w-full flex-col p-4  md:flex-row md:justify-between md:pb-12 md:pl-8 md:pt-16 lg:pb-24 lg:pl-20 lg:pr-8 lg:pt-24"> */}
    <div className=" flex min-h-[calc(100vh-113px)] flex-col pb-4 md:flex-row md:justify-between md:pb-12 lg:pb-24">
      <div className="flex flex-col justify-between gap-10 pt-3 md:pt-12 lg:pt-24">
        <pre>
          <h1 className="inline-block font-lato text-4xl leading-[1.1]  tracking-[0.8px] lg:text-5xl  xl:text-[80px] ">
            {`Приветствуем вас,\nдорогие любители\nживотных!`}
          </h1>
        </pre>
        <p className="w-min min-w-full text-xl lg:text-2xl">
          Вам нужно перевезти своего питомца в ОАЭ или из ОАЭ? Компания Dagin
          Pets Relocation рада предложить вам свою помощь: услуги по
          транспортировке животных, а также пет такси на территории ОАЭ.
        </p>
        <div className="relative h-full w-full md:hidden">
          <Image
            src={fat_cat}
            alt="Dog and cat walking"
            fill
            className="object-contain"
          />
        </div>
        <div className="">
          <Button text="Хочу перевезти" />
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="-right absolute -right-48 -top-10 h-[762px] w-[762px] ">
          <Image
            src={fat_cat}
            alt="Dog and cat walking"
            fill
            className="object-contain "
          />
          <div className="absolute bottom-2 -z-10 h-10 w-full rounded-[50%] bg-black opacity-20 blur-xl "></div>
        </div>
      </div>
      <div className="absolute left-[30vw] top-[10vh] w-[16vw] md:left-[20vw] md:top-[2vh]">
        <Paw />
      </div>
      <div className="absolute left-[50vw] top-[calc(15vh+16vw)] w-[16vw] rotate-45 md:left-[40vw] md:top-[calc(5vh+16vw)]">
        <Paw />
      </div>
    </div>
  );
};

export default Welcome;
