"use client";

import useModalStore from "./store";

interface ButtonProps {
  text: string;
  size?: "small" | "large";
  radius?: "small" | "large";
  type?: "submit" | "button";
  onClick?: () => void;
  width?: "content" | "full";
}
const Button = ({
  text,
  size = "large",
  radius = "large",
  type = "button",
  onClick,
  width = "content",
}: ButtonProps) => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <button
      className={`h-min cursor-pointer whitespace-nowrap bg-blue-button-default font-lato text-white transition-colors hover:bg-blue-button-darken hover:text-gray-50 
      ${size === "small" ? "px-12 py-3 text-base" : "px-16 py-6 text-2xl"}
      ${radius === "small" ? "rounded-lg" : "rounded-[40px]"}
      ${width === "full" ? "w-full" : "w-fit"}
      `}
      type={type}
      onClick={onClick ? onClick : openModal}
    >
      {text}
    </button>
  );
};

export default Button;
