"use client";

import Image from "next/image";
import ContactForm from "./ContactForm";
import sweet_pets from "../public/sweet_pets.png";
import { CloseIcon } from "./icons";
import useModalStore from "./store";
import { useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

const ContactModal = () => {
  const modalStore = useModalStore();
  const handleClose = modalStore.closeModal;
  const showModal = modalStore.isOpen;
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [showModal]);

  useClickOutside(contactRef, handleClose);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black  bg-opacity-40 py-20">
      <div
        ref={contactRef}
        className="relative z-50  flex h-[95vh] w-[644px] flex-col rounded-3xl bg-white p-2 pt-12"
      >
        <div className="scrollbar scrollbar-thumb-gray-form scrollbar-thin scrollbar-track-gray-100 pt flex h-full flex-col items-center overflow-auto rounded-3xl bg-white  font-jakarta">
          <div
            className="absolute right-10 top-10 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </div>
          <ContactForm />
          <div className="ml-auto">
            <Image
              src={sweet_pets}
              alt={"Pets lying together"}
              width={360}
              height={172}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;