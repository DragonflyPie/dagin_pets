import Image from "next/image";
import cat_shining from "../public/cat_shining.png";
import Button from "./Button";
import { Paw } from "./components/vectors";
import plane from "../public/plane.png";
import line from "../public/line.png";

const Welcome = () => {
  return (
    // {/* <div className="flex w-full flex-col p-4  md:flex-row md:justify-between md:pb-12 md:pl-8 md:pt-16 lg:pb-24 lg:pl-20 lg:pr-8 lg:pt-24"> */}
    <div
      className="relative flex w-full  scroll-m-28 overflow-x-hidden px-4 pb-16 lg:pb-24  xl:min-h-[calc(100vh-113px)] xl:overflow-x-visible xl:px-20"
      id="welcome"
    >
      <div className="flex  w-full ">
        <div className="z-10 flex  w-min flex-col justify-between gap-6  pt-14 md:gap-10 xl:gap-6 xl:pt-16">
          <pre>
            <h1 className="inline-block w-fit font-lato text-2xl font-extrabold leading-[1.1] tracking-[0.24px]  tracking-[0.48px] md:pr-28 md:text-5xl xl:text-[5rem] xl:tracking-[0.8px] ">
              {`Приветствуем вас,\nдорогие любители\nживотных!`}
            </h1>
          </pre>
          <p className="font-osans text-xs/[18px]  md:text-xl/[32px]  xl:text-2xl">
            Вам нужно перевезти своего питомца в ОАЭ или из ОАЭ? Компания Dagin
            Pets Relocation рада предложить вам свою помощь: услуги по
            транспортировке животных, а также пет такси на территории ОАЭ.
          </p>

          <Button text="Хочу перевезти" modal />
        </div>
        <div className="relative flex max-h-full w-full flex-1 flex-col items-center justify-center ">
          {/* <div className="absolute -right-[21%] bottom-0 top-0 -z-10 my-auto aspect-[1.05] h-3/5 max-h-[780px] xs:-right-[10%] xs:h-4/5 md:-right-[15%]  lg:h-full xl:-right-[10%] xl:-top-20"> */}
          <div className="absolute -z-10 aspect-[1.05] h-4/5 translate-x-10 translate-y-10 xs:h-full">
            <Image
              src={cat_shining}
              alt="Cat tearing through the page"
              className="-z-10  object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-[15%] top-2 -z-0 w-[16vw] ">
        <Paw />
      </div>
      <div className="absolute left-[35%] top-[45%] -z-10 w-[16vw] rotate-45">
        <Paw />
      </div>

      {/* <Image
        src={line}
        alt={""}
        className="absolute  left-20 h-[80vh] object-contain object-left"
      ></Image> */}
    </div>
  );
};

export default Welcome;
