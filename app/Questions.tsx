import Accordeon from "./Accordeon";
import Button from "./Button";
import avatar_group from "../public/avatar_group.png";
import Image from "next/image";

const Questions = () => {
  return (
    <div
      className="flex w-full scroll-m-10 flex-col items-center gap-16 pb-24"
      id="faq"
    >
      <div className="flex flex-col items-center gap-5">
        <h3 className="font-inter text-4xl font-semibold tracking-tight">
          Часто задаваемые вопросы.
        </h3>
        <p className="text-xl">
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Accordeon />
      <div className="flex w-full flex-col items-center gap-8 rounded-2xl bg-white-dirty p-8">
        <div className="">
          <Image
            src={avatar_group}
            alt="Helpful people"
            width={120}
            className="h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-xl font-medium">Остались вопросы?</p>
          <p className="text-lg ">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Button text={"Написать"} size="small" radius="small" />
      </div>
    </div>
  );
};

export default Questions;
