import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { StarEmpty, StarFilled } from "./components/icons";
import { useState } from "react";
import Image from "next/image";

const Review = ({ date, rating, message, name, pet, image }: ReviewData) => {
  const [expand, setExpand] = useState(false);

  const filledStarsArray = Array.from({ length: rating }, (_, index) => index);
  const emptyStarsArray = Array.from(
    { length: 5 - rating },
    (_, index) => index,
  );

  return (
    <div className="flex w-[260px] flex-col gap-4 bg-white-dirty p-6 font-lato">
      <div
        className="
        flex flex-col gap-6"
      >
        <p className="text-[0.375rem]">{date}</p>
        <div className="flex">
          {filledStarsArray.map((number) => (
            <StarFilled key={number} />
          ))}
          {emptyStarsArray.map((number) => (
            <StarEmpty key={number} />
          ))}
        </div>
        <p className="font-osans leading-[120%]">{name}</p>
        <p className="text-sm/[120%] font-light">Питомец: {pet}</p>
      </div>
      <hr />
      <div className="">
        <article
          className={` w-full text-ellipsis text-sm/[120%] transition-all duration-1000 ease-out
      ${
        expand ? "line-clamp-none max-h-[40rem]" : "line-clamp-6 max-h-[6.5rem]"
      }
      `}
        >
          {message}
        </article>
        <button
          onClick={() => setExpand(!expand)}
          className="text-xs font-bold text-blue-button-default"
        >
          {expand ? "Свернуть" : "Развернуть"}
        </button>
      </div>
      <div className="relative h-[342px] w-full">
        <Image
          src={image}
          alt="Pet photo"
          fill
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Review;
