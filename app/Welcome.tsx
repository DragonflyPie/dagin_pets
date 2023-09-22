import Image from "next/image";
import cat_shining from "../public/cat_shining.png";
import Button from "./Button";
import { Paw } from "./components/vectors";

const Welcome = () => {
  return (
    // {/* <div className="flex w-full flex-col p-4  md:flex-row md:justify-between md:pb-12 md:pl-8 md:pt-16 lg:pb-24 lg:pl-20 lg:pr-8 lg:pt-24"> */}
    <div
      className="relative flex  w-full scroll-m-28 flex-col px-4 pb-20 xl:min-h-[calc(100vh-113px)] xl:px-20 xl:pb-24"
      id="welcome"
    >
      <div className="z-10 flex h-full w-min grow flex-col justify-between gap-6  pt-14 md:gap-10 xl:pt-20">
        <pre>
          <h1 className="inline-block w-fit font-lato text-2xl font-extrabold leading-[1.1] tracking-[0.24px]  tracking-[0.48px] md:pr-10 md:text-5xl xl:text-[5rem] xl:tracking-[0.8px] ">
            {`Приветствуем вас,\nдорогие любители\nживотных!`}
          </h1>
        </pre>
        <p className="w-min min-w-full text-xs/[18px] md:text-xl/[32px] xl:text-2xl">
          Вам нужно перевезти своего питомца в ОАЭ или из ОАЭ? Компания Dagin
          Pets Relocation рада предложить вам свою помощь: услуги по
          транспортировке животных, а также пет такси на территории ОАЭ.
        </p>
        <div className="">
          <Button text="Хочу перевезти" modal />
        </div>
      </div>
      {/* <div className="relative hidden md:block"> */}
      <div className="absolute right-0 -z-10 flex  h-full max-h-[780px] w-3/5 flex-col items-end justify-center overflow-x-clip xl:w-1/2 xl:overflow-x-visible">
        <div className="relative left-[25%] aspect-square w-full xl:-top-10 xl:left-20 ">
          <Image
            src={cat_shining}
            alt="Cat tearing through the page"
            fill
            className=" object-contain object-right  "
          />
        </div>
      </div>
      {/* </div> */}
      <div className="absolute -top-[100px] left-[15%] -z-0 w-[16vw] ">
        <Paw />
      </div>
      <div className="absolute left-[35%] top-[35%] -z-10 w-[16vw] rotate-45">
        <Paw />
      </div>
      {/* <div className="absolute  -left-20  -top-[113px]">
        <Plane />
      </div> */}
    </div>
  );
};

export default Welcome;
