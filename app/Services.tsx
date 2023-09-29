import ServiceCard from "./ServiceCard";
import puppy_img from "../public/puppy_icon.png";
import mops_img from "../public/mops_icon.png";
import cat_img from "../public/cat_hand_icon.png";
import maltipoo_img from "../public/maltipoo_icon.png";

const Services = () => {
  return (
    <div
      className="flex scroll-m-10 flex-col items-center px-4 md:pb-12 lg:px-16 xl:px-20 xl:pb-20"
      id="services"
    >
      <h2 className="flex flex-col gap-6 whitespace-pre-wrap  text-center md:pb-10">
        <span className="font-inter text-2xl font-bold md:text-[2.625rem]/[1.75rem]">
          Dagin Pets Relocation
        </span>
        <span className="text-xs xl:text-lg/7">
          предлагает широкий спектр услуг, включая:
        </span>
      </h2>
      <ul className=" relative grid gap-0 divide-y divide-gray-light md:grid-cols-2 md:grid-rows-2 md:gap-16 md:divide-y-0">
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
        <div className="absolute left-[calc(50%-0.5px)] top-[3%] hidden h-[94%] w-px bg-black bg-gray-light md:block"></div>
        <div className="absolute top-[calc(50%-0.5px)] hidden h-px w-full bg-gray-light md:block"></div>
      </ul>
    </div>
  );
};

export default Services;
