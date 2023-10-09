import Image from "next/image";
import cat_shining from "@/public/images/cat_shining.png";
import Button from "../commons/Button";
import plane from "@/public/images/plane_rotated_2.png";
import line from "@/public/images/line.png";
import Link from "next/link";
import { Paw } from "../commons/vectors";

const Welcome = () => {
  return (
    <div
      className="relative flex w-full  scroll-mt-20 overflow-x-hidden px-4 pb-16 lg:px-16  lg:pb-24 xl:min-h-[calc(100vh-113px)] xl:overflow-x-visible xl:px-20"
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

          <Link href={"?modal=true&step=1"} scroll={false}>
            <Button text="Хочу перевезти" modal />
          </Link>
        </div>
        <div className="relative flex max-h-full w-full flex-1 flex-col items-center justify-center ">
          <div className="absolute -z-10 aspect-[1.05] h-4/5 translate-x-10 translate-y-10 xs:h-full">
            <Image
              priority
              src={cat_shining}
              alt="Cat tearing through the page"
              className="relative -z-10 object-contain"
            />
          </div>
        </div>
      </div>
      <Image
        src={plane}
        alt="Plane"
        className="absolute bottom-10 right-[3%] hidden w-28 object-contain md:block lg:bottom-20 lg:w-40 lg:rotate-[-5deg]  xl:right-5 xl:w-56"
      />
      <div className="absolute left-[15%] top-2 -z-0 w-[16vw] ">
        <Paw />
      </div>
      <div className="absolute left-[35%] top-[45%] -z-10 w-[16vw] rotate-45">
        <Paw />
      </div>
      <Image
        src={line}
        alt=""
        className="absolute left-0 top-0 hidden h-full object-contain object-left md:block"
      />
    </div>
  );
};

export default Welcome;
