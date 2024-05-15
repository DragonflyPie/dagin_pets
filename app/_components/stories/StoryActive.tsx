import Image from "next/image";
import { CloseIcon } from "../commons/icons";

interface StoryProps extends StoryData {
  handleClose: () => void;
}

const StoryActive = ({
  date,
  name,
  image,
  text,
  adopted,
  handleClose,
}: StoryProps) => {
  return (
    <div className="relative flex h-screen flex-col gap-4 border bg-white p-6 md:h-[90vh] md:w-[40rem] md:rounded-3xl">
      <button
        className="absolute right-4 top-4 flex cursor-pointer text-gray-dark transition-transform duration-300 hover:scale-110 md:right-6 md:top-6"
        onClick={handleClose}
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col gap-6">
        <p className="text-xs">{date}</p>
        <p className="font-geometria font-medium leading-[120%]">{name}</p>
      </div>
      <hr />
      <div className="">
        <article
          className={` line-clamp-4 w-full text-ellipsis whitespace-pre-line text-sm/[16px] font-light
      `}
        >
          {text}
        </article>
      </div>
      <div className="relative h-3/4 w-full">
        <Image
          src={image}
          alt="Pet photo"
          fill
          className="rounded  object-cover"
          sizes="(max-width: 768px) 90vw,(max-width: 1280px) 33vw, 25vw"
        />
      </div>
    </div>
  );
};

export default StoryActive;
