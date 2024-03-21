import ServiceCard from "./ServiceCard";
import puppy_img from "@/public/images/puppy_icon.png";
import mops_img from "@/public/images/mops_icon.png";
import cat_img from "@/public/images/cat_hand_icon.png";
import maltipoo_img from "@/public/images/maltipoo_icon.png";
import fluffy from "@/public/images/services_fluffy.png";

interface ServicesProps {
  dictionary: {
    title_start: string;
    title_ending: string;
    service1_header: string;
    service1_description: string;
    service2_header: string;
    service2_description: string;
    service3_header: string;
    service3_description: string;
    service4_header: string;
    service4_description: string;
    service5_header: string;
    service5_description: string;
  };
}

const Services = ({ dictionary }: ServicesProps) => {
  return (
    <div
      className="flex scroll-m-[70px] flex-col items-center px-4 pb-14 md:scroll-m-[100px] md:pb-12 lg:px-16 xl:scroll-m-[150px] xl:px-20 xl:pb-24"
      id="services"
    >
      <h2 className="flex flex-col gap-4 whitespace-pre-wrap text-center  md:gap-6 md:pb-10">
        <span className="font-geometria text-2xl font-medium md:text-[2.625rem]/[1.75rem]">
          {dictionary.title_start}
        </span>
        <span className="text-sm md:text-lg/7">{dictionary.title_ending}</span>
      </h2>
      <ul className="relative flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-x-6 md:gap-y-9">
        <ServiceCard
          icon={puppy_img}
          heading={dictionary.service1_header}
          text={dictionary.service1_description}
        />
        <ServiceCard
          icon={cat_img}
          heading={dictionary.service2_header}
          text={dictionary.service2_description}
        />
        <ServiceCard
          icon={mops_img}
          heading={dictionary.service3_header}
          text={dictionary.service3_description}
        />
        <ServiceCard
          icon={maltipoo_img}
          heading={dictionary.service4_header}
          text={dictionary.service4_description}
        />
        <ServiceCard
          icon={fluffy}
          heading={dictionary.service5_header}
          text={dictionary.service5_description}
        />
      </ul>
    </div>
  );
};

export default Services;
