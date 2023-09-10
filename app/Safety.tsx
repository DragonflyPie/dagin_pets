import Image from "next/image";
import dog_and_cat_2_img from "../public/dog_and_cat_2.png";

const Safety = () => {
  return (
    <div className="flex items-center gap-4 pb-12 pr-4 pt-4 md:gap-8 md:py-12 md:pr-8 lg:gap-14 lg:py-24  lg:pr-20">
      <div className="relative mt-auto aspect-[0.94/1] h-full max-h-[554px] w-full max-w-[524px] flex-1 ">
        <Image
          src={dog_and_cat_2_img}
          alt="Dog and cat staring"
          fill
          className=" object-contain"
        />
      </div>
      <article className="min-w-[70%] flex-1">
        <h3 className="text-lg/[150%] sm:text-xl/[150%] md:text-2xl/[150%] lg:text-4xl/[180%]">
          <pre className="font-osans">
            Мы <span className="font-bold">ценим здоровье</span>
          </pre>
          <pre className="font-osans">
            и<span className="font-bold"> благополучие ваших питомцев</span>
          </pre>
        </h3>
        <p className="font-inter text-lg/[120%] sm:text-xl/[150%] lg:text-2xl/[180%]">
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
