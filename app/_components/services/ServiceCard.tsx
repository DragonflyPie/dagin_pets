import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceCardProps {
  icon: StaticImport;
  heading: string;
  text: string;
}
const ServiceCard = ({ icon, text, heading }: ServiceCardProps) => {
  return (
    <li className="flex grow-0 basis-[45%] flex-col items-center gap-4 text-lg md:gap-6 md:py-0 lg:basis-[31%] lg:text-xl ">
      <div className="shrink-0">
        <Image
          width={76}
          height={76}
          sizes="100vw"
          src={icon}
          alt="Service Icon"
          className="rounded-[16px]"
        />
      </div>
      <article className="flex flex-col items-center gap-3 md:gap-4">
        <h3 className=" whitespace-pre text-center font-geometria text-base/6 font-medium md:text-xl/7 lg:text-[1.375rem]/7">
          {heading}
        </h3>
        <p className="text-pretty text-center text-xs xs:px-12 md:px-0 md:text-base/[1.625rem]">
          {text}
        </p>
      </article>
    </li>
  );
};

export default ServiceCard;
