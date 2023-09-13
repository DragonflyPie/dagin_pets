import Image from "next/image";
import fluffy_pets from "../public/fluffy_cat_and_dog.png";

const Safety = () => {
  return (
    <div className="flex justify-between gap-6 py-24">
      <div className="relative aspect-[1.4] w-[100px] lg:w-[300px]  xl:w-[540px]">
        <Image
          src={fluffy_pets}
          alt="Dog and cat staring"
          fill
          className="object-contain"
        />
      </div>
      {/* </div> */}
      {/* <div className="h-20 min-w-[20px] flex-1 bg-green-200"></div> */}
      <article className="flex-1">
        <pre className="font-osans text-lg/[150%] sm:text-xl/[150%] md:text-2xl/[150%] lg:text-4xl/[180%]">
          Мы <span className="font-bold">ценим здоровье</span>
        </pre>
        <pre className="font-osans text-lg/[150%] sm:text-xl/[150%] md:text-2xl/[150%] lg:text-4xl/[180%]">
          и<span className="font-bold"> благополучие ваших питомцев</span>
        </pre>
        <p className=" font-inter text-lg/[120%] sm:text-xl/[150%] lg:text-2xl/[180%]">
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
