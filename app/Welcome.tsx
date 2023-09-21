import Image from "next/image";
import fat_cat from "../public/fat_cat.png";
import Button from "./Button";
import { Paw } from "./vectors";
import { Plane } from "./icons";

const Welcome = () => {
  return (
    // {/* <div className="flex w-full flex-col p-4  md:flex-row md:justify-between md:pb-12 md:pl-8 md:pt-16 lg:pb-24 lg:pl-20 lg:pr-8 lg:pt-24"> */}
    <div
      className="relative flex min-h-[calc(100vh-113px)] scroll-m-28  flex-col  pb-4 md:flex-row md:justify-between md:pb-12 lg:pb-24"
      id="welcome"
    >
      <div className="z-10 flex flex-col justify-between gap-10 pt-3  md:pt-12 lg:pt-24">
        <pre>
          <h1 className="inline-block font-lato text-4xl font-extrabold leading-[1.1]  tracking-[0.8px] lg:text-5xl  xl:text-[80px] ">
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
            alt="Fat fluffy cat"
            fill
            className=" object-contain"
          />
        </div>

        <div className="">
          <Button text="Хочу перевезти" modal />
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="-right clip absolute -right-48 -top-10 h-[762px] w-[762px]   ">
          <Image
            src={fat_cat}
            alt="Fat fluffy cat"
            fill
            className=" object-contain "
          />
          <div className="absolute bottom-2 -z-10 h-10 w-full rounded-[50%] bg-black opacity-20 blur-xl "></div>
        </div>
      </div>
      <div className="absolute -top-[100px] left-[15%] -z-0 w-[16vw] ">
        <Paw />
      </div>
      <div className="absolute left-[35%] top-[35%] -z-10 w-[16vw] rotate-45">
        <Paw />
      </div>
      <div className="absolute  -left-20  -top-[113px]">
        <Plane />
      </div>
    </div>
  );
};

export default Welcome;
