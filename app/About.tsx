import Image from "next/image";
import maltipoo from "../public/maltipoooo.png";
import { BlueShape } from "./vectors";

const About = () => {
  return (
    <div className="relative flex items-center p-4 md:pb-12 lg:pb-24 lg:pl-20 lg:pr-8">
      <div className="relative aspect-[3/4] h-full max-h-[419px] w-full max-w-[317px]">
        <Image
          src={maltipoo}
          alt={"Maltipoo image"}
          fill
          className="w-full object-contain"
        />
      </div>

      <p className=" lg:px-30 px-4  md:px-20 md:text-xl/8 lg:text-2xl/9 xl:px-36">
        Мы — <span className="font-semibold">лицензированная </span> компания с
        <span className="font-semibold">профессиональным опытом</span> в области
        перевозки животных, и наша команда специалистов поможет вам с выбором{" "}
        <span className="font-semibold">наилучшего маршрута</span> и способа
        транспортировки вашего любимца.
      </p>
      <div className="absolute right-0  top-[60%] w-36">
        <BlueShape />
      </div>
    </div>
  );
};

export default About;
