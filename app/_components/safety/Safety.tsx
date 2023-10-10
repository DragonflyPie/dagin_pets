import Image from "next/image";
import fluffy_pets from "@/public/images/fluffy_cat_and_dog.png";
import Link from "next/link";
import Button from "../commons/Button";

interface SafetyProps {
  dictionary: {
    value_title: string;
    value_desciption: string;
    value_button: string;
  };
}

const Safety = ({ dictionary }: SafetyProps) => {
  return (
    <div
      className="flex h-full scroll-m-10 flex-col items-center justify-between px-4  pb-16 md:flex-row lg:px-16 xl:px-20 xl:pb-24 "
      id="safety"
    >
      <div className="relative flex aspect-[1.42] max-h-[400px] w-64 items-center md:h-full  md:w-full md:flex-1">
        <Image
          src={fluffy_pets}
          alt="Dog and cat staring"
          fill
          className=" object-contain"
          sizes="(max-width: 768px) 90vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-4 pb-6 md:gap-10 ">
        <article className="">
          <h3
            className=" font-lato text-base/[150%] md:text-2xl/[150%] lg:text-[2rem]/[150%] xl:text-4xl/[180%]"
            dangerouslySetInnerHTML={{ __html: dictionary.value_title }}
          ></h3>
          <p className=" font-inter text-xs/[180%] md:text-base/[180%] xl:text-2xl/[180%]">
            {dictionary.value_desciption}
          </p>
        </article>
        <Link href={"?modal=true&step=1"} scroll={false}>
          <Button text={dictionary.value_button} modal />
        </Link>
      </div>
    </div>
  );
};

export default Safety;
