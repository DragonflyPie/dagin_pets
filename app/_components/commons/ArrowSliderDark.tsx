import { CustomArrowProps } from "react-slick";
import { Arrow } from "./icons";

interface ArrowProps extends CustomArrowProps {
  direction: "left" | "right";
}

const SliderArrowDark = ({ onClick, direction }: ArrowProps) => {
  return (
    <div
      onClick={onClick}
      className={`absolute top-[calc(50%-36px)] z-40 hidden cursor-pointer items-center justify-center rounded-r-3xl bg-black bg-opacity-40 p-6 text-white transition-colors duration-300 hover:bg-opacity-80 md:flex
      ${direction === "left" ? "right-full rotate-180" : "left-full "}
      
      `}
    >
      <Arrow />
    </div>
  );
};

export default SliderArrowDark;
