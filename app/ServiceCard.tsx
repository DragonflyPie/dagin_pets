import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceCardProps {
  icon: StaticImport;
  heading: string;
  text: string;
}
const ServiceCard = ({ icon, text, heading }: ServiceCardProps) => {
  return (
    <li className="flex flex-col items-center gap-8 py-6 text-lg md:py-0 lg:text-xl ">
      <div className="shrink-0">
        <Image
          width={76}
          height={76}
          sizes="100vw"
          src={icon}
          alt="Service Icon"
        />
      </div>
      <article className="flex flex-col items-center gap-[22px]">
        <h3 className="text-center font-inter text-xl/6 font-semibold md:text-[1.313rem]/7">
          {heading}
        </h3>
        <p className="px-10 text-center text-xs md:text-base/[1.625rem]">
          {text}
        </p>
      </article>
    </li>
  );
};

export default ServiceCard;
