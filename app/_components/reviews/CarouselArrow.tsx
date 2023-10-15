import { CustomArrowProps } from "react-slick";
import { Down } from "../commons/icons";

interface ArrowProps extends CustomArrowProps {
  direction: "left" | "right";
}

function CarouselArrow({ onClick, direction }: ArrowProps) {
  return (
    <div
      onClick={onClick}
      className={`absolute top-[15rem] z-10 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-opacity-40 transition-colors duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-20 md:flex
      ${
        direction === "left"
          ? "-left-8 rotate-90 lg:-left-10"
          : "-right-8 -rotate-90 lg:-right-10 "
      }
      
      `}
    >
      <Down />
    </div>
  );
}

export default CarouselArrow;
