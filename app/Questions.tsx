import Accordeon from "./Accordeon";
import Button from "./Button";
import avatar_group from "../public/avatar_group.png";
import Image from "next/image";

const Questions = () => {
  return (
    <div
      className="flex w-full scroll-m-10 flex-col items-center px-4 pb-24 md:px-20"
      id="faq"
    >
      <div className="flex flex-col items-center gap-5 pb-6 md:pb-10">
        <h3 className="font-lato text-[2rem]/[2.375rem] font-semibold tracking-tight md:text-4xl/[2.75rem]">
          Часто задаваемые вопросы.
        </h3>
        <p className="text-lg/[1.75rem] md:text-xl/[150%]">
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
          <p className="font-inter text-xl/[1.875] font-medium md:font-osans">
            Остались вопросы?
          </p>
          <p className="text-center text-base md:text-lg">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Button text={"Написать"} size="small" />
      </div>
    </div>
  );
};

export default Questions;
