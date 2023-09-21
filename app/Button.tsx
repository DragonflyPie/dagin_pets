"use client";

import useStore from "./store";

interface ButtonProps {
  text: string;
  size?: "small" | "large";
  radius?: "small" | "large";
  type?: "submit" | "button";
  onClick?: () => void;
  width?: "content" | "full";
  modal?: boolean;
  disabled?: boolean;
}
const Button = ({
  text,
  size = "large",
  radius = "large",
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
      className={`h-min whitespace-nowrap font-lato text-white transition-colors  hover:text-gray-50 
      ${size === "small" ? "px-12 py-3 text-base" : "px-16 py-6 text-2xl"}
      ${radius === "small" ? "rounded-lg" : "rounded-[40px]"}
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
