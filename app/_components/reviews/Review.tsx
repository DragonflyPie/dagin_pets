import { StarFilled } from "../commons/icons";
import { useState } from "react";
import Image from "next/image";

interface ReviewProps extends ReviewData {
  less: string;
  more: string;
}

const Review = ({
  date,
  rating,
  message,
  name,
  image,
  less,
  more,
}: ReviewProps) => {
  const [expand, setExpand] = useState(false);

  const filledStarsArray = Array.from({ length: rating }, (_, index) => index);

  return (
    <div className="flex w-[280px] flex-col gap-4 rounded-md border bg-white-dirty p-6 md:w-[320px] xl:w-[360px]">
      <div className="flex flex-col gap-6">
        <p className="text-xs">{date}</p>
        <div className="flex">
          {filledStarsArray.map((number) => (
            <StarFilled key={number} />
          ))}
        </div>
        <p className="font-geometria font-medium leading-[120%]">{name}</p>
      </div>
      <hr />
      <div className="">
        <article
          className={` w-full text-ellipsis text-sm/[16px] font-light transition-all duration-1000 ease-out
      ${
        expand ? "line-clamp-none max-h-[40rem]" : "line-clamp-5 max-h-[6.5rem]"
      }
      `}
        >
          {message}
        </article>
        <button
          onClick={() => setExpand(!expand)}
          className="font-geometria text-xs font-medium text-honeycomb-default"
        >
          {expand ? less : more}
        </button>
      </div>
      <div className="relative aspect-square w-full">
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

export default Review;
