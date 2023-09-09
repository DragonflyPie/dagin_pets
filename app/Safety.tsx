import Image from "next/image";
import dog_and_cat_2_img from "../public/dog_and_cat_2.png";

const Safety = () => {
  return (
    <div className="flex">
      <div className="">
        <Image src={dog_and_cat_2_img} alt="Dog and cat staring" />
      </div>
      <article className="">
        <h3>
          Мы <span className="font-semibold">ценим здоровье</span> и
          <span className="font-semibold"> благополучие ваших питомцев</span>
        </h3>
        <p>
          и наша миссия - обеспечить максимально комфортную и безопасную
          перевозку для них. Не стесняйтесь связаться с нами сегодня, чтобы
          узнать больше о наших услугах, получить бесплатную консультацию по
          транспортировке животных в ОАЭ и заказать пет такси для вашего
          питомца.
        </p>
      </article>
    </div>
  );
};

export default Safety;
