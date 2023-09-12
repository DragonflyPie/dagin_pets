import Image from "next/image";
import maltipoo from "../public/maltipoooo3.png";
import { BlueShape } from "./vectors";

const About = () => {
  return (
    <div className="relative flex items-center md:pb-12  lg:pb-24">
      <div className="w-full ">
        <Image
          src={maltipoo}
          alt={"Maltipoo image"}
          height={436}
          className="object-contain"
        />
      </div>

      <p className=" lg:px-30 px-4  md:pl-20 md:text-xl/8 lg:text-2xl/9 xl:pl-36">
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
