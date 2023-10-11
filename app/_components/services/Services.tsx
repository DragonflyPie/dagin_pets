import ServiceCard from "./ServiceCard";
import puppy_img from "@/public/images/puppy_icon.png";
import mops_img from "@/public/images/mops_icon.png";
import cat_img from "@/public/images/cat_hand_icon.png";
import maltipoo_img from "@/public/images/maltipoo_icon.png";

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
  };
}

const Services = ({ dictionary }: ServicesProps) => {
  return (
    <div
      className="flex scroll-m-[70px] flex-col items-center px-4 md:scroll-m-[100px] md:pb-12 lg:px-16 xl:scroll-m-[150px] xl:px-20 xl:pb-20"
      id="services"
    >
      <h2 className="flex flex-col gap-4 whitespace-pre-wrap text-center  md:gap-6 md:pb-10">
        <span className="font-inter text-2xl font-bold md:text-[2.625rem]/[1.75rem]">
          {dictionary.title_start}
        </span>
        <span className="text-sm md:text-lg/7">{dictionary.title_ending}</span>
      </h2>
      <ul className=" relative grid gap-0 divide-y divide-gray-light md:grid-cols-2 md:grid-rows-2 md:gap-16 md:divide-y-0">
        <ServiceCard
          icon={puppy_img}
          heading={dictionary.service1_header}
          text={dictionary.service1_description}
        />
        <ServiceCard
          icon={mops_img}
          heading={dictionary.service2_header}
          text={dictionary.service2_description}
        />
        <ServiceCard
          icon={cat_img}
          heading={dictionary.service3_header}
          text={dictionary.service3_description}
        />
        <ServiceCard
          icon={maltipoo_img}
          heading={dictionary.service4_header}
          text={dictionary.service4_description}
        />
        <div className="absolute left-[calc(50%-0.5px)] top-[3%] hidden h-[94%] w-px bg-black bg-gray-light md:block"></div>
        <div className="absolute top-[calc(50%-0.5px)] hidden h-px w-full bg-gray-light md:block"></div>
      </ul>
    </div>
  );
};

export default Services;
