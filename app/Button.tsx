"use client";

import useStore from "./store";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  type?: "submit" | "button";
  onClick?: () => void;
  width?: "content" | "full";
  modal?: boolean;
  disabled?: boolean;
}
const Button = ({
  text,
  size = "large",
  type = "button",
  onClick,
  width = "content",
  modal = false,
  disabled,
}: ButtonProps) => {
  const openModal = useStore((state) => state.openModal);

  return (
    <button
      disabled={disabled}
      className={`h-min whitespace-nowrap  rounded-[40px] font-lato text-white transition-colors  hover:text-gray-50 
      ${
        size === "small"
          ? "px-[1.125rem] py-2.5 text-base"
          : size === "medium"
          ? "px-6 py-1.5 text-xs/[1.125rem] md:px-12 md:py-3 md:text-base/[1.125rem]"
          : "px-6 py-3 text-base/[1.125rem] md:px-16 md:py-6 md:text-xl/[1.125rem] xl:text-2xl/[1.125rem]"
      }
      ${width === "full" ? "w-full" : "w-fit"}
      ${
        disabled
          ? "cursor-auto bg-gray-form hover:bg-gray-form"
          : "cursor-pointer bg-blue-button-default hover:bg-blue-button-darken"
      }
      `}
      type={type}
      onClick={modal ? openModal : onClick}
    >
      {text}
    </button>
  );
};

export default Button;
