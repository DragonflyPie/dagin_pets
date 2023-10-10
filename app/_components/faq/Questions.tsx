import Accordeon from "./Accordeon";
import Button from "../commons/Button";
import avatar_group from "@/public/images/avatar_group.png";
import Image from "next/image";
import Link from "next/link";

const Questions = () => {
  return (
    <div
      className="flex w-full scroll-m-10 flex-col items-center px-4 pb-24 lg:px-16 xl:px-20"
      id="faq"
    >
      <div className="flex flex-col items-center gap-5 pb-6 md:pb-10">
        <h2 className=" text-center font-lato text-3xl font-semibold tracking-tight md:text-4xl/[2.375rem] md:text-4xl/[2.75rem]">
          Часто задаваемые вопросы.
        </h2>
        <p className=" text-center text-lg/[1.75rem] md:text-xl/[150%]">
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Accordeon />
      <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-white-dirty p-8 md:gap-8">
        <div className="">
          <Image
            src={avatar_group}
            alt="Helpful people"
            width={120}
            className="h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-inter text-xl/[1.875] font-medium md:font-lato">
            Остались вопросы?
          </p>
          <p className="text-center text-base md:text-lg">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Link href={"?modal=true&step=1"} scroll={false}>
          <Button text={"Написать"} size="small" />
        </Link>
      </div>
    </div>
  );
};

export default Questions;
