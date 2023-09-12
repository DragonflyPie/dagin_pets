interface ButtonProps {
  text: string;
  size?: "small" | "large";
}
const Button = ({ text, size = "large" }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-button-default hover:bg-blue-button-darken h-min w-fit cursor-pointer whitespace-nowrap rounded-[40px] font-lato text-white transition-colors hover:text-gray-50 md:w-min  ${
        size === "small" ? "px-12 py-3 text-base" : "px-16 py-6 text-2xl  "
      } `}
    >
      {text}
    </button>
  );
};

export default Button;
