import Image from "next/image";
import maltipoo from "../public/maltipoooo.png";
import { BlueShape } from "./vectors";

const About = () => {
  return (
    <div className=" flex items-center md:pb-12  lg:pb-24">
      <div className="relative h-[436px] w-[355px]">
        <Image
          src={maltipoo}
          alt={"Maltipoo image"}
          fill
          className="object-contain"
        />
        <div className="absolute -bottom-2 left-2 h-10 w-full rounded-[50%] bg-black opacity-30 blur-xl "></div>
      </div>

      <p className="lg:px-30 flex-1 px-4  md:pl-20 md:text-xl/8 lg:text-2xl/9 xl:pl-36">
        Мы — <span className="font-semibold">лицензированная </span> компания с
        <span className="font-semibold">профессиональным опытом</span> в области
        перевозки животных, и наша команда специалистов поможет вам с выбором{" "}
        <span className="font-semibold">наилучшего маршрута</span> и способа
        транспортировки вашего любимца.
      </p>
    </div>
  );
};

export default About;
