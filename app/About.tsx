import Image from "next/image";
import maltipoo from "../public/maltipoooo.png";
import { BlueShape } from "./vectors";

const About = () => {
  return (
    <div className="flex relative">
      <div className="">
        <Image src={maltipoo} alt={"Maltipoo image"} />
      </div>
      <p className="">
        Мы — <span className="font-semibold">лицензированная </span> компания с
        <span className="font-semibold">профессиональным опытом</span> в области
        перевозки животных, и наша команда специалистов поможет вам с выбором{" "}
        <span className="font-semibold">наилучшего маршрута</span> и способа
        транспортировки вашего любимца.
      </p>
      <div className="absolute w-36  right-0 top-1/2">
        <BlueShape />
      </div>
    </div>
  );
};

export default About;
