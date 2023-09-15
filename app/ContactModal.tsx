"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import sweet_pets from "../public/sweet_pets.png";
import { CloseIcon } from "./icons";

const ContactModal = () => {
  const handleClose = () => {
    return;
  };
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden bg-black bg-opacity-25">
      <div className="relative z-50 flex w-[644px] flex-col items-center overflow-hidden rounded-3xl bg-white  pt-12 font-lato">
        <div
          className="absolute right-12 top-12 cursor-pointer"
          onClick={handleClose}
        >
          <CloseIcon />
        </div>
        <hgroup className="flex flex-col items-center pb-16 font-lato">
          <p className="pb-3 text-base font-semibold text-blue-button-default">
            Связаться с нами
          </p>
          <h5 className="pb-5 text-4xl/[44px] font-semibold">
            Контактная форма
          </h5>
          <p className="text-xl/[30px] text-gray-form-heading">
            Заполните данные и мы Вам ответим
          </p>
        </hgroup>
        <ContactForm />
        <div className="ml-auto">
          <Image
            src={sweet_pets}
            alt={"Pets lying together"}
            width={350}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
