"use client";

import Image from "next/image";
import FormContainer from "./FormContainer";
import sweet_pets from "../public/sweet_pets.png";
import { CloseIcon } from "./components/icons";
import useStore from "./store";
import { useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";
import FocusTrap from "focus-trap-react";

const ContactModal = () => {
  const modalStore = useStore();
  const handleClose = modalStore.closeModal;
  const showModal = modalStore.isOpen;
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showModal) return;
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [showModal, handleClose]);

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;
    if (showModal) {
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarCompensation}px`;
    }

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [showModal]);

  useClickOutside(contactRef, handleClose);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  bg-opacity-40 xl:py-20">
      <div
        autoFocus
        role="dialog"
        aria-modal="true"
        ref={contactRef}
        className="relative  flex h-full flex-col bg-white p-2 md:h-[calc(100vh-2rem)] md:max-w-[36rem] md:rounded-3xl md:pt-6 2xl:h-[calc(100vh-6rem)] 2xl:pt-12 "
      >
        <FocusTrap>
          <div className=" flex h-full flex-col items-center overflow-auto rounded-3xl bg-white font-jakarta scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-form ">
            <button
              className="absolute right-4 top-4 z-50 flex cursor-pointer text-black transition-transform duration-300 hover:scale-110 md:right-6 md:top-6"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
            <FormContainer />
            <div className="ml-auto">
              <Image
                src={sweet_pets}
                alt={"Pets lying together"}
                width={360}
                height={172}
              />
            </div>
          </div>
        </FocusTrap>
      </div>
    </div>
  );
};

export default ContactModal;
