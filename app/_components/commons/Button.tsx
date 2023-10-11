"use client";

interface ButtonProps {
  text: string;
  size?: "small" | "medium" | "large";
  type?: "submit" | "button";
  onClick?: () => void;
  width?: "content" | "full";
  modal?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
const Button = ({
  text,
  size = "large",
  type = "button",
  onClick,
  width = "content",
  modal = false,
  disabled,
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`h-min whitespace-nowrap  rounded-[40px] font-lato text-white transition-colors hover:text-gray-50  active:scale-95 
      ${
        size === "small"
          ? "px-[1.125rem] py-2.5 text-base"
          : size === "medium"
          ? "px-6 py-1.5 text-xs/[1.125rem] md:px-12 md:py-3 md:text-base/[1.125rem]"
          : "px-6 py-3 text-base/[1.125rem] md:px-8 md:py-4 md:text-lg/[1.125rem] lg:px-12 lg:py-6 lg:text-xl/[1.125rem] xl:text-2xl/[1.125rem]"
      }
      ${width === "full" ? "w-full" : "w-fit"}
      ${
        disabled
          ? "cursor-auto bg-gray-form hover:bg-gray-form"
          : "cursor-pointer bg-blue-button-default hover:bg-blue-button-darken"
      }
      `}
      type={type}
    >
      {loading ? "Отправляем..." : text}
    </button>
  );
};

export default Button;
