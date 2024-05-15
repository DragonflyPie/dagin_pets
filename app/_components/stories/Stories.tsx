"use client";

import Slider from "react-slick";
import ArrowSlider from "../commons/ArrowSlider";
import Story from "./Story";
import { useRef, useState } from "react";
import StoryModal from "./StoryModal";
import useClickOutside from "@/app/_utilities/hooks/useClickOutside";

interface ReviewsProps {
  dictionary: {
    title: string;
    titleSingle: string;
    full: string;
    data: StoryData[];
  };
}

const Stories = ({ dictionary }: ReviewsProps) => {
  const [active, setActive] = useState(-1);
  const handleClose = () => setActive(-1);

  const handleOpen = (currentIndex: number) => {
    setActive(currentIndex);
  };

  const settings = {
    className: "slider variable-width",
    infinite: true,
    nextArrow: <ArrowSlider direction="right" />,
    prevArrow: <ArrowSlider direction="left" />,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div
      id="stories"
      className="w-full scroll-m-10 scroll-m-[70px] pb-14 md:scroll-m-[100px] xl:scroll-m-[150px] xl:pb-24"
    >
      <hgroup className="flex w-full flex-col items-center gap-5 px-4 pb-6 md:pb-9">
        <h2 className="font-geometria text-2xl font-medium md:text-[2.625rem]/[2.5rem]">
          {dictionary.title}
        </h2>
      </hgroup>
      <div className="max-w-[100vw] px-4 md:px-10 lg:px-16 xl:px-20">
        <Slider {...settings}>
          {dictionary.data.map((story, i) => {
            return (
              <div className="px-2" key={story.text}>
                <Story
                  full={dictionary.full}
                  date={story.date}
                  name={story.name}
                  image={story.image}
                  text={story.text}
                  adopted={story.adopted}
                  handleOpen={() => handleOpen(i)}
                />
              </div>
            );
          })}
        </Slider>
      </div>
      {active >= 0 && (
        <StoryModal
          dictionary={dictionary}
          index={active}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Stories;
