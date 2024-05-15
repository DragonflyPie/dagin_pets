import Image from "next/image";

interface StoryProps extends StoryData {
  full: string;
  handleOpen: () => void;
}

const Story = ({
  date,
  name,
  image,
  text,
  full,
  adopted,
  handleOpen,
}: StoryProps) => {
  return (
    <div className="flex w-[280px] flex-col gap-4 rounded-md border bg-white-dirty p-6 md:w-[320px] xl:w-[360px]">
      <div className="relative aspect-square w-full">
        <Image
          src={image}
          alt="Pet photo"
          fill
          className="rounded  object-cover"
          sizes="(max-width: 768px) 90vw,(max-width: 1280px) 33vw, 25vw"
        />
      </div>
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
        <button
          onClick={handleOpen}
          className="font-geometria text-xs font-medium text-honeycomb-default"
        >
          {full}
        </button>
      </div>
    </div>
  );
};

export default Story;
