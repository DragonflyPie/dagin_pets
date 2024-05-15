"use client";

import Slider from "react-slick";
import StoryActive from "./StoryActive";
import { useEffect, useRef, useState } from "react";
import ArrowSliderDark from "../commons/ArrowSliderDark";
import useScrollLock from "@/app/_utilities/hooks/useScrollLock";
import useClickOutside from "@/app/_utilities/hooks/useClickOutside";

interface ReviewsProps {
  dictionary: {
    titleSingle: string;
    data: StoryData[];
  };
  index: number;
  handleClose: () => void;
}

const StoryModal = ({ index, dictionary, handleClose }: ReviewsProps) => {
  const [isShown, setIsShown] = useState(false);

  useScrollLock();

  const sliderRef = useRef(null);

  useClickOutside(sliderRef, handleClose);

  useEffect(() => {
    setIsShown(true);
  }, []);
  const settings = {
    className: "storySlider",
    infinite: true,
    nextArrow: <ArrowSliderDark direction="right" />,
    prevArrow: <ArrowSliderDark direction="left" />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: index,
  };
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-300
    ${isShown ? "bg-opacity-40" : "bg-opacity-0"}
    `}
    >
      <div
        ref={sliderRef}
        className={`max-w-full transition-all duration-300 md:max-w-[40rem]
      
    ${isShown ? "opacity-100" : "opacity-20"}
      `}
      >
        <Slider {...settings}>
          {dictionary.data.map((story) => {
            return (
              <div key={story.text}>
                <StoryActive
                  date={story.date}
                  name={story.name}
                  image={story.image}
                  text={story.text}
                  adopted={story.adopted}
                  handleClose={handleClose}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default StoryModal;
