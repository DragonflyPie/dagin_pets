"use client";

import "./lib/slick.css";
import "./lib/slick-theme.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review from "./Review";
import CarouselArrow from "./CarouselArrow";
import { REVIEWS_DATA } from "./data/reviews_data";

const Reviews = () => {
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
    <div className="pb-16 md:pb-24">
      <hgroup className="flex w-full flex-col items-center gap-5 pb-6">
        <h2 className="font-lato text-xl font-bold tracking-tight md:text-4xl/[2.75rem] md:font-semibold">
          Отзывы
        </h2>
        <p className="text-xs/[150%] md:text-xl">
          Наша история: Восторженные отзывы о перевозке питомцев
        </p>
      </hgroup>
      <div className="max-w-[100vw] px-4 xl:px-20">
        <Slider {...settings}>
          {REVIEWS_DATA.map((review) => {
            return (
              <div className="px-2.5" key={review.image}>
                <Review
                  date={review.date}
                  rating={review.rating}
                  message={review.message}
                  name={review.name}
                  pet={review.pet}
                  image={review.image}
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

// <div className="">
//   <Carousel
//     additionalTransfrom={0}
//     arrows
//     autoPlay={false}
//     centerMode={false}
//     className=""
//     containerClass="w-full"
//     dotListClass=""
//     draggable
//     // customLeftArrow={<LeftArrow />}
//     // containerClass="w-full"
//     focusOnSelect={false}
//     infinite
//     itemClass="px-2 min-w-[258px] "
//     keyBoardControl
//     minimumTouchDrag={80}
//     // pauseOnHover
//     renderArrowsWhenDisabled={false}
//     renderButtonGroupOutside={false}
//     renderDotsOutside={false}
//     removeArrowOnDeviceType="mobile"
//     // partialVisible
//     responsive={{
//       desktop: {
//         breakpoint: {
//           max: 3000,
//           min: 1280,
//         },
//         items: 4,

//         partialVisibilityGutter: 20,
//       },
//       mobile: {
//         breakpoint: {
//           max: 500,
//           min: 0,
//         },
//         items: 1,
//         partialVisibilityGutter: 30,
//       },
//       tabletLarge: {
//         breakpoint: {
//           max: 1280,
//           min: 850,
//         },
//         items: 3,
//         partialVisibilityGutter: 40,
//       },
//       tabletSmall: {
//         breakpoint: {
//           max: 850,
//           min: 500,
//         },
//         items: 2,
//         partialVisibilityGutter: 100,
//       },
//     }}
//     rewind={false}
//     rewindWithAnimation={false}
//     rtl={false}
//     shouldResetAutoplay
//     showDots={false}
//     sliderClass=""
//     slidesToSlide={1}
//     swipeable
//   >
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Я хотел бы поделиться своим положительным опытом перевозки моего дорогого четвероногого друга. В последнее время мне понадобилось отправить своего питомца в другой город, и после долгих поисков я обратился в компанию "Pets Transport".С самого начала мне было приятно общаться с сотрудниками этой компании. Они были внимательны, отзывчивы и готовы ответить на все мои вопросы и опасения. Компания предоставила всю необходимую информацию о процессе перевозки и просветила меня по всем правилам и требованиям.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Я хотел бы поделиться своим положительным опытом перевозки моего дорогого четвероногого друга. В последнее время мне понадобилось отправить своего питомца в другой город, и после долгих поисков я обратился в компанию "Pets Transport".С самого начала мне было приятно общаться с сотрудниками этой компании. Они были внимательны, отзывчивы и готовы ответить на все мои вопросы и опасения. Компания предоставила всю необходимую информацию о процессе перевозки и просветила меня по всем правилам и требованиям.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Я хотел бы поделиться своим положительным опытом перевозки моего дорогого четвероногого друга. В последнее время мне понадобилось отправить своего питомца в другой город, и после долгих поисков я обратился в компанию "Pets Transport".С самого начала мне было приятно общаться с сотрудниками этой компании. Они были внимательны, отзывчивы и готовы ответить на все мои вопросы и опасения. Компания предоставила всю необходимую информацию о процессе перевозки и просветила меня по всем правилам и требованиям.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Я хотел бы поделиться своим положительным опытом перевозки моего дорогого четвероногого друга. В последнее время мне понадобилось отправить своего питомца в другой город, и после долгих поисков я обратился в компанию "Pets Transport".С самого начала мне было приятно общаться с сотрудниками этой компании. Они были внимательны, отзывчивы и готовы ответить на все мои вопросы и опасения. Компания предоставила всю необходимую информацию о процессе перевозки и просветила меня по всем правилам и требованиям.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//     <Review
//       date={"12.05.2023"}
//       rating={4}
//       message={`Я хотел бы поделиться своим положительным опытом перевозки моего дорогого четвероногого друга. В последнее время мне понадобилось отправить своего питомца в другой город, и после долгих поисков я обратился в компанию "Pets Transport".С самого начала мне было приятно общаться с сотрудниками этой компании. Они были внимательны, отзывчивы и готовы ответить на все мои вопросы и опасения. Компания предоставила всю необходимую информацию о процессе перевозки и просветила меня по всем правилам и требованиям.`}
//       name={"Константин"}
//       pet={"Кошка Васька"}
//       image={Cat}
//     />
//   </Carousel>
// </div>
