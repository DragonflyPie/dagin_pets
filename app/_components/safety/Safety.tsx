import Image from "next/image";
import fluffy_pets from "@/public/images/fluffy_cat_and_dog.png";

const Safety = () => {
  return (
    <div
      className="flex h-full scroll-m-10 flex-col items-center justify-between px-4 pb-5 md:flex-row md:pb-16 lg:px-16 xl:px-20 xl:pb-24 "
      id="safety"
    >
      <div className="relative flex aspect-[1.42] max-h-[400px] w-64 items-center md:h-full  md:w-full md:flex-1">
        {/* <div className="relative flex h-full w-[40%] grow items-center"> */}

        <Image
          src={fluffy_pets}
          alt="Dog and cat staring"
          fill
          className=" object-contain "
        />
      </div>
      <article className="flex-1">
        <pre className=" font-osans text-base/[150%] md:text-2xl/[150%] lg:text-[2rem]/[150%] xl:text-4xl/[180%]">
          Мы <span className="font-bold">ценим здоровье</span>
        </pre>
        <pre className="font-osans text-base/[150%] md:pr-6 md:text-2xl/[150%]  lg:text-[2rem]/[150%] xl:text-4xl/[180%]">
          и<span className="font-bold"> благополучие ваших питомцев</span>
        </pre>
        <p className=" font-inter text-xs/[180%] md:text-base/[180%] xl:text-2xl/[180%]">
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
