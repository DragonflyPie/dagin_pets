import Image from "next/image";
import maltipoo from "@/public/images/maltipoooo.png";

interface AboutProps {
  dictionary: {
    text: string;
  };
}
const About = ({ dictionary }: AboutProps) => {
  return (
    <div
      className=" flex w-full scroll-mt-[70px] items-center px-4  pb-14 md:scroll-mt-[87px] lg:px-16   xl:scroll-mt-[150px] xl:px-24 xl:px-36 xl:pb-24"
      id="about"
    >
      <div className="relative aspect-[3/4] max-h-full w-[40vw] xs:w-1/3 md:w-1/4">
        <Image
          src={maltipoo}
          alt={"Maltipoo image"}
          fill
          className="absolute -ml-[20%] object-contain md:ml-0"
          sizes="(max-width: 768px) 45vw, 25vw"
        />
        <div className=" absolute -bottom-2 left-2 h-10 w-full rounded-[50%] bg-black opacity-30 blur-xl "></div>
      </div>

      <p
        className="-ml-6 flex-1 text-xs xs:text-sm md:ml-0 md:pl-10 md:text-2xl/[36px] xl:pl-36"
        dangerouslySetInnerHTML={{ __html: dictionary.text }}
      >
        {/* Мы — <span className="font-semibold">лицензированная </span> компания с
        <span className="font-semibold"> профессиональным опытом</span> в
        области перевозки животных, и наша команда специалистов поможет вам с
        выбором <span className="font-semibold">наилучшего маршрута</span> и
        способа транспортировки вашего любимца. */}
      </p>
    </div>
  );
};

export default About;
