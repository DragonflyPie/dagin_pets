import ServiceCard from "./ServiceCard";
import puppy_img from "../public/puppy_icon.png";
import mops_img from "../public/mops_icon.png";
import cat_img from "../public/cat_hand_icon.png";
import dog_cat_img from "../public/dog_and_cat_icon.png";

const Services = () => {
  return (
    <div className="flex flex-col items-center p-4 font-inter md:px-8 xl:px-20">
      <h2 className="text:xl whitespace-pre-wrap pb-4 text-center md:pb-6 md:text-2xl lg:pb-10">
        <span className="font-bold">Dagin Pets Relocation</span>
        <br />
        предлагает широкий спектр услуг, включая:
      </h2>
      <ul className="grid  gap-x-4 gap-y-8 rounded-3xl p-4 shadow-[0px_0px_15px_0px_rgba(59,59,59,0.09)]  md:p-8 lg:grid-cols-2 lg:gap-y-20 lg:p-10">
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
          icon={dog_cat_img}
          heading="Пет такси с любовью и заботой:"
          text="вкусняшки на усмотрение владельца, при необходимости - пеленочки для кошек и специальные пакеты для собак, облагородивших пальмы."
        />
      </ul>
    </div>
  );
};

export default Services;
