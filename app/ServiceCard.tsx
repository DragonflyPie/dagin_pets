import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ServiceCardProps {
  icon: StaticImport;
  heading: string;
  text: string;
}
const ServiceCard = ({ icon, text, heading }: ServiceCardProps) => {
  return (
    <li className="flex gap-8">
      <div className="shrink-0">
        <Image width={76} height={76} src={icon} alt="Service Icon" />
      </div>
      <article className="flex flex-col">
        <h3 className="font-semibold">{heading}</h3>
        <p>{text}</p>
      </article>
    </li>
  );
};

export default ServiceCard;
