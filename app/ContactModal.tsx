"use client";

import Image from "next/image";
import FormContainer from "./FormContainer";
import sweet_pets from "../public/sweet_pets.png";
import { CloseIcon } from "./components/icons";
import useStore from "./store";
import { useEffect, useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

const ContactModal = () => {
  const modalStore = useStore();
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
    <div className=" fixed inset-0 z-30 flex items-center justify-center bg-black  bg-opacity-40 py-20">
      {/* <RemoveScrollBar /> */}
      <div
        ref={contactRef}
        className="relative z-50  flex flex-col rounded-3xl bg-white p-2 pt-12 "
      >
        <div className=" flex h-full flex-col items-center overflow-auto rounded-3xl bg-white font-jakarta scrollbar scrollbar-thin scrollbar-track-gray-100  scrollbar-thumb-gray-form">
          <div
            className="absolute right-10 top-10 cursor-pointer"
            onClick={handleClose}
          >
            <CloseIcon />
          </div>
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
      </div>
    </div>
  );
};

export default ContactModal;
