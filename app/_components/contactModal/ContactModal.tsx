"use client";

import Image from "next/image";
import FormContainer from "./FormContainer";
import sweet_pets from "@/public/images/sweet_pets.png";
import { useEffect, useRef, useState } from "react";
import FocusTrap from "focus-trap-react";
import { useParams, useRouter } from "next/navigation";
import useClickOutside from "@/app/_utilities/hooks/useClickOutside";
import { CloseIcon } from "../commons/icons";

interface ContactModalProps {
  dictionary: {
    header: string;
    subheader: string;
    step_one: StepOne;
    step_two: StepTwo;
  };
}

const ContactModal = ({ dictionary }: ContactModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const params = useParams();
  const locale = params.lang;

  const contactRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeModal = async () => {
    handleClose();
    setTimeout(() => {
      router.push(`/${locale}`, { scroll: false });
    }, 500);
  };

  const handleClose = async () => {
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [router]);

  useEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth;

    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = `${scrollBarCompensation}px`;

    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  useClickOutside(contactRef, closeModal);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-500 xl:py-20
    
          ${!showModal ? "bg-opacity-0" : "bg-opacity-40"}
    `}
    >
      <div
        autoFocus
        role="dialog"
        aria-modal="true"
        ref={contactRef}
        className={`relative flex h-full flex-col bg-white p-2 transition-all duration-500 md:h-[calc(100vh-2rem)] md:w-[36rem] md:rounded-3xl md:pt-6  2xl:pt-12
          ${!showModal ? "-translate-y-[200%]" : ""}
          `}
      >
        <FocusTrap>
          <div className="flex h-full flex-col items-center overflow-auto rounded-3xl bg-white scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-form ">
            <button
              className="absolute right-4 top-4 z-50 flex cursor-pointer text-gray-dark transition-transform duration-300 hover:scale-110 md:right-6 md:top-6"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
            <FormContainer handleClose={handleClose} dictionary={dictionary} />
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
