import Image from "next/image";
import fluffy_pets from "@/public/images/fluffy_cat_and_dog.png";
import Link from "next/link";
import Button from "../commons/Button";

const Safety = () => {
  return (
    <div
      className="flex h-full scroll-m-10 flex-col items-center justify-between px-4  pb-16 md:flex-row lg:px-16 xl:px-20 xl:pb-24 "
      id="safety"
    >
      <div className="relative flex aspect-[1.42] max-h-[400px] w-64 items-center md:h-full  md:w-full md:flex-1">
        <Image
          src={fluffy_pets}
          alt="Dog and cat staring"
          fill
          className=" object-contain"
          sizes="(max-width: 768px) 90vw, 50vw"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-4 md:gap-10 ">
        <article className="">
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
        <Link href={"?modal=true&step=1"} scroll={false}>
          <Button text="Хочу перевезти" modal />
        </Link>
      </div>
    </div>
  );
};

export default Safety;
