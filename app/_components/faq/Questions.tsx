import Button from "../commons/Button";
import avatar_group from "@/public/images/avatar_group.png";
import Image from "next/image";
import Link from "next/link";
import AccordeonItem from "./AccordeonItem";

interface QuestionsProps {
  dictionary: {
    faq_title: string;
    faq_description: string;
    more_question: string;
    more_question_description: string;
    faq_data: {
      question: string;
      answer: string;
    }[];
  };
  button_label: string;
}

const Questions = ({ dictionary, button_label }: QuestionsProps) => {
  return (
    <div
      className="flex w-full scroll-m-[70px] flex-col items-center px-4 pb-24 md:scroll-m-[100px] lg:px-16 xl:scroll-m-[150px] xl:px-20"
      id="faq"
    >
      <div className="flex flex-col items-center gap-5 pb-6 md:pb-10">
        <h2 className=" text-center font-lato text-3xl font-semibold tracking-tight md:text-4xl/[2.375rem] md:text-4xl/[2.75rem]">
          {dictionary.faq_title}
        </h2>
        <p className=" text-center text-lg/[1.75rem] md:text-xl/[150%]">
          {dictionary.faq_description}
        </p>
      </div>
      <ul className="flex w-full flex-col gap-6 divide-y pb-12 md:pb-16 xl:w-[768px]">
        {dictionary.faq_data.map((item) => {
          return <AccordeonItem content={item} key={item.question} />;
        })}
      </ul>
      <div className="flex w-full flex-col items-center gap-6 rounded-2xl bg-white-dirty p-8 md:gap-8">
        <div className="">
          <Image
            src={avatar_group}
            alt="Helpful people"
            width={120}
            className="h-auto"
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-inter text-xl/[1.875] font-medium md:font-lato">
            {dictionary.more_question}
          </p>
          <p className="text-base md:text-lg">
            {dictionary.more_question_description}
          </p>
        </div>
        <Link href={"?modal=true&step=1"} scroll={false}>
          <Button text={button_label} size="small" />
        </Link>
      </div>
    </div>
  );
};

export default Questions;
