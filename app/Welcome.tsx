import Image from "next/image";
import pets_walking from "../public/dog_and_cat.png";
import logo from "../public/logo_with_text.png";
import Button from "./Button";
import { DottedLine, Paw } from "./vectors";

const Welcome = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="absolute left-4 -z-10 w-16 md:left-8 md:w-24 lg:left-16 lg:w-[120px]">
        <Image src={logo} alt="DaginPets Logo" />
      </div>
      <div className="flex w-full flex-col p-4 pt-16 md:flex-row md:justify-between md:pb-12 md:pt-16 lg:pb-24 lg:pl-20 lg:pr-8 lg:pt-24">
        <div className="flex h-full flex-col justify-between gap-10 pt-3 md:pt-12 lg:pt-24">
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
              src={pets_walking}
              alt="Dog and cat walking"
              fill
              className="object-contain"
            />
          </div>
          <div className="">
            <Button />
          </div>
        </div>
        <div className="relative hidden max-h-screen w-full md:block">
          <Image
            src={pets_walking}
            alt="Dog and cat walking"
            fill
            className="object-contain object-right"
          />
        </div>
        <div className="absolute left-[30vw] top-[10vh] w-[16vw] md:left-[20vw] md:top-[2vh]">
          <Paw />
        </div>
        <div className="absolute left-[50vw] top-[calc(15vh+16vw)] w-[16vw] rotate-45 md:left-[40vw] md:top-[calc(5vh+16vw)]">
          <Paw />
        </div>
        <div className="absolute left-0 top-0 -z-10 h-[95vh]">
          <DottedLine />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
