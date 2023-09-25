import { CustomArrowProps } from "react-slick";
import { Down } from "./components/icons";

interface ArrowProps extends CustomArrowProps {
  direction: "left" | "right";
}

function CarouselArrow({ onClick, direction }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className={`absolute top-[15rem] z-10 hidden h-8 w-8 items-center justify-center rounded-full  bg-white bg-opacity-40 hover:bg-black hover:bg-opacity-20 md:flex lg:bg-transparent
      ${
        direction === "left"
          ? " left-3 rotate-90 xl:-left-10"
          : "right-3  -rotate-90 xl:-right-10 "
      }
      
      `}
    >
      <Down />
      {/* <div className={`${className} `} style={style} onClick={onClick} /> */}
    </div>
  );
}

export default CarouselArrow;
