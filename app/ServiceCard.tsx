import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceCardProps {
  icon: StaticImport;
  heading: string;
  text: string;
}
const ServiceCard = ({ icon, text, heading }: ServiceCardProps) => {
  return (
    <li className="flex flex-col items-center gap-8 text-lg lg:text-xl ">
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
        <h3 className="font-semibold">{heading}</h3>
        <p className="px-10 text-center">{text}</p>
      </article>
    </li>
  );
};

export default ServiceCard;
