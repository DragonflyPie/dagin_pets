import ServiceCard from "./ServiceCard";
import puppy_img from "../public/puppy_icon.png";
import mops_img from "../public/mops_icon.png";
import cat_img from "../public/cat_hand_icon.png";
import maltipoo_img from "../public/maltipoo_icon.png";

const Services = () => {
  return (
    <div className="flex flex-col items-center font-inter">
      <h2 className="text:xl flex flex-col gap-6 whitespace-pre-wrap pb-6 text-center md:pb-6 md:text-2xl lg:pb-10">
        <span className="font-bold">Dagin Pets Relocation</span>
        <span>предлагает широкий спектр услуг, включая:</span>
      </h2>
      <ul className="relative grid gap-8 lg:grid-cols-2 lg:grid-rows-2 ">
        <ServiceCard
          icon={puppy_img}
          heading="Полное сопровождение"
          text="в процессе перевозки вашего питомца, включая подготовку всех документов для вылета и прибытия, организация зоокурьеров для оформления документов в отсутствие владельца."
        />
        <ServiceCard
          icon={mops_img}
          heading="Различные варианты доставки"
          text="«от двери до двери» как салоном, так и карго по доступным ценам."
        />
        <ServiceCard
          icon={cat_img}
          heading="Гибкие форматы сотрудничества,"
          text="такие как проверка готовых документов, консультационная поддержка или оформление документов без полного сопровождения вылета."
        />
        <ServiceCard
          icon={maltipoo_img}
          heading="Пет такси с любовью и заботой:"
          text="вкусняшки на усмотрение владельца, при необходимости - пеленочки для кошек и специальные пакеты для собак, облагородивших пальмы."
        />
        <div className="bg-gray-light absolute left-[calc(50%-0.5px)] top-[3%] hidden h-[94%] w-px bg-black lg:block"></div>
        <div className="bg-gray-light absolute top-[calc(50%-0.5px)] hidden h-px w-full lg:block"></div>
      </ul>
    </div>
  );
};

export default Services;
