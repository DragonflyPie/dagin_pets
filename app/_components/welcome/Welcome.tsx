import Image from "next/image";
import cat_shining from "@/public/images/cat_shining.png";
import Button from "../commons/Button";
import plane from "@/public/images/plane_rotated_2.png";
import line from "@/public/images/line.png";
import Link from "next/link";
import { Paw } from "../commons/vectors";

interface WelcomeProps {
  dictionary: {
    header_title: string;
    header_description: string;
    header_button: string;
  };
}

const Welcome = ({ dictionary }: WelcomeProps) => {
  return (
    <div
      className="relative flex w-full scroll-mt-[113px] overflow-x-hidden px-4 pb-16  pt-[62px] md:pt-[87px] lg:px-16 lg:pb-24 xl:min-h-[100vh]  xl:px-20  xl:pt-[113px] 2xl:overflow-x-visible"
      id="welcome"
    >
      <div className="relative flex w-full justify-between">
        <div className="absolute left-[15%] top-2 -z-0 w-[16vw] ">
          <Paw />
        </div>
        <div className="absolute left-[35%] top-[45%] -z-0 w-[16vw] rotate-45">
          <Paw />
        </div>
        <div className="z-10 flex  w-min basis-1/2 flex-col justify-between  gap-6 pt-14  xl:pt-16">
          <pre>
            <h1 className="inline-block w-fit font-geometria text-2xl/[1.1] font-medium tracking-[0.24px] tracking-[0.48px] md:text-5xl/[1.1] xl:text-[5rem]/[1.1] xl:tracking-[0.8px] ">
              {dictionary.header_title}
            </h1>
          </pre>
          <p className="text-balance pr-6 font-raleway text-xs/[1.5rem] xs:text-sm/[1.5rem] md:text-xl/[2rem] xl:text-2xl/[3rem]">
            {dictionary.header_description}
          </p>

          <Link href={"?modal=true&step=1"} className="w-fit" scroll={false}>
            <Button text={dictionary.header_button} modal />
          </Link>
        </div>
        {/* <div className="relative -z-10 flex aspect-[0.8] h-[80%] flex-col self-center xl:w-full"> */}
        <div className="relative -z-10 flex aspect-[0.8] h-[90%] flex-col self-center xs:h-full md:h-full xl:w-full">
          <Image
            priority
            src={cat_shining}
            alt="Cat tearing through the page"
            className="-z-10  origin-bottom-right object-contain drop-shadow-lg xl:-translate-x-10 2xl:translate-x-0"
            fill
            sizes="(max-width: 768px) 40vw, 30vw"
          />
          <Image
            src={plane}
            alt="Plane"
            className="absolute bottom-0 right-[20%] hidden w-40 rotate-[-11deg] object-contain md:block lg:right-[15%] xl:right-[30%] xl:w-56 2xl:right-[20%]"
          />
        </div>
        {/* <div className="relative flex max-h-full w-full flex-1 flex-col items-center justify-center ">
          <div className="xl:translate-x-25 absolute -z-10 aspect-[0.8] h-4/5 xs:h-full md:translate-x-10">
            <Image
              priority
              src={cat_shining}
              alt="Cat tearing through the page"
              className="-z-10 object-contain drop-shadow-lg"
              fill
              sizes="(max-width: 768px) 80vw, 60vw"
            />
          </div>
        </div> */}
      </div>
      {/* <Image
        src={plane}
        alt="Plane"
        className="absolute bottom-16 right-[3%] hidden w-40 rotate-[-11deg] object-contain md:block lg:rotate-[-3deg] xl:bottom-36 xl:right-5  xl:w-56 xl:rotate-[-11deg]"
      /> */}
      <Image
        src={line}
        priority
        alt=""
        className="absolute left-0 top-0 hidden h-full w-auto object-contain object-left opacity-25 md:block"
      />
    </div>
  );
};

export default Welcome;
