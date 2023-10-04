"use client";

import { useRef, useState } from "react";
import { Menus, Plus } from "../commons/icons";

interface AccordeonItemProps {
  content: {
    question: string;
    answer: string;
  };
}
const AccordeonItem = ({ content }: AccordeonItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef<HTMLParagraphElement>(null);
  const toggleOpenAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="">
      <div
        className="flex w-full cursor-pointer justify-between gap-2 pt-6 md:gap-6"
        onClick={toggleOpenAnswer}
      >
        <p className="text-lg font-medium md:text-xl">{content.question}</p>
        <div className="">{isOpen ? <Menus /> : <Plus />}</div>
      </div>
      <p
        ref={answerRef}
        className="overflow-hidden pt-1 text-base transition-all duration-500 ease-out"
        style={{
          height: isOpen ? `${answerRef.current?.scrollHeight}px` : "0px",
        }}
      >
        {content.answer}
      </p>
    </li>
  );
};

export default AccordeonItem;
