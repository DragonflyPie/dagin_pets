"use client";

import "@/app/_utilities/slick.css";
import "../../_utilities/slick-theme.css";
import Slider from "react-slick";
import Review from "./Review";
import CarouselArrow from "./CarouselArrow";

interface ReviewsProps {
  dictionary: {
    reviews_title: string;
    reviews_more: string;
    reviews_less: string;
    reviews_description: string;
    reviews_data: ReviewData[];
  };
}

const Reviews = ({ dictionary }: ReviewsProps) => {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    nextArrow: <CarouselArrow direction="right" />,
    prevArrow: <CarouselArrow direction="left" />,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div
      id="reviews"
      className="w-full scroll-m-10 scroll-m-[70px] pb-14 md:scroll-m-[100px] xl:scroll-m-[150px] xl:pb-24"
    >
      <hgroup className="flex w-full flex-col items-center gap-5 px-4 pb-6">
        <h2 className="font-geometria text-xl font-medium tracking-tight md:text-4xl/[2.75rem]">
          {dictionary.reviews_title}
        </h2>
        <p className="w-min min-w-[12rem] text-center text-xs/[150%] font-medium md:w-full md:text-xl">
          {dictionary.reviews_description}
        </p>
      </hgroup>
      <div className="max-w-[100vw] px-4 md:px-10 lg:px-16 xl:px-20">
        <Slider {...settings}>
          {dictionary.reviews_data.map((review) => {
            return (
              <div className="px-2" key={review.date}>
                <Review
                  date={review.date}
                  rating={review.rating}
                  message={review.message}
                  name={review.name}
                  image={review.image}
                  less={dictionary.reviews_less}
                  more={dictionary.reviews_more}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
