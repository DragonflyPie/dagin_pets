import Image from "next/image";
import ContactForm from "./ContactForm";
import sweet_pets from "../public/sweet_pets.png";

const ContactModal = () => {
  return (
    <div className="absolute inset-0 z-30  flex items-center justify-center bg-black bg-opacity-25">
      <div className="relative z-50 flex w-[644px] flex-col items-center overflow-hidden rounded-3xl bg-white pt-8  ">
        <p className="font-lato font-semibold text-blue-button-default">
          Связаться с нами
        </p>
        <h5>Контактная форма</h5>
        <p>Заполните данные и мы Вам ответим</p>
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
