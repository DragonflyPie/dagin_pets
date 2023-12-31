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
      className="relative flex w-full scroll-mt-[113px] overflow-x-hidden px-4  pb-16 pt-[62px] md:pt-[87px] lg:px-16 lg:pb-24  xl:min-h-[100vh] xl:overflow-x-visible xl:px-20 xl:pt-[113px]"
      id="welcome"
    >
      <div className="relative flex  w-full ">
        <div className="absolute left-[15%] top-2 -z-0 w-[16vw] ">
          <Paw />
        </div>
        <div className="absolute left-[35%] top-[45%] -z-0 w-[16vw] rotate-45">
          <Paw />
        </div>
        <div className="z-10 flex  w-min flex-col justify-between gap-6  pt-14 md:gap-10 xl:gap-6 xl:pt-16">
          <pre>
            <h1 className="inline-block w-fit font-lato text-2xl/[1.1] font-extrabold tracking-[0.24px]  tracking-[0.48px] md:pr-28 md:text-5xl/[1.1] xl:text-[5rem]/[1.1] xl:tracking-[0.8px] ">
              {dictionary.header_title}
            </h1>
          </pre>
          <p className="font-lato text-xs/[1.5]  md:text-xl/[1.6]  xl:text-2xl/[1.33]">
            {dictionary.header_description}
          </p>

          <Link href={"?modal=true&step=1"} className="w-fit" scroll={false}>
            <Button text={dictionary.header_button} modal />
          </Link>
        </div>
        <div className="relative flex max-h-full w-full flex-1 flex-col items-center justify-center ">
          <div className="absolute -z-10 aspect-[1.05] h-4/5 translate-x-10 translate-y-10 xs:h-full">
            <Image
              priority
              src={cat_shining}
              alt="Cat tearing through the page"
              className="-z-10 object-contain"
              fill
              sizes="(max-width: 768px) 80vw, 60vw"
            />
          </div>
        </div>
      </div>
      <Image
        src={plane}
        alt="Plane"
        className="absolute bottom-10 right-[3%] hidden w-28 object-contain md:block lg:bottom-20 lg:w-40 lg:rotate-[-5deg]  xl:right-5 xl:w-56"
      />
      <Image
        src={line}
        alt=""
        className="absolute left-0 top-0 hidden h-full w-auto object-contain object-left md:block"
      />
    </div>
  );
};

export default Welcome;
