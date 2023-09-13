interface ButtonProps {
  text: string;
  size?: "small" | "large";
  radius?: "hard" | "soft";
}
const Button = ({ text, size = "large", radius = "hard" }: ButtonProps) => {
  return (
    <button
      className={`h-min w-fit cursor-pointer whitespace-nowrap bg-blue-button-default font-lato text-white transition-colors hover:bg-blue-button-darken hover:text-gray-50 md:w-min 
      ${size === "small" ? "px-12 py-3 text-base" : "px-16 py-6 text-2xl"}
      ${radius === "soft" ? "rounded-lg" : "rounded-[40px]"} `}
    >
      {text}
    </button>
  );
};

export default Button;
