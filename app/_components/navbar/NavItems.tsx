import Link from "next/link";
import { PawSmallIcon } from "../commons/icons";

interface NavItemsProps {
  top?: boolean;
  handleClick?: () => void;
  items: {
    welcome: string;
    about: string;
    services: string;
    reviews: string;
    faq: string;
    contacts: string;
  };
}

const NavItems = ({ handleClick, top, items }: NavItemsProps) => {
  const typedItems = Object.keys(items) as Array<keyof typeof items>;
  return (
    <>
      {typedItems.map((option, index) => {
        if (top && option === "welcome") return;
        return (
          <li
            onClick={handleClick}
            key={option}
            className="group relative flex w-full cursor-pointer justify-center transition-all  duration-300 hover:bg-blue-light lg:gap-0 lg:p-0 lg:hover:bg-inherit"
          >
            <Link
              href={`#${option}`}
              className="flex w-full gap-6 whitespace-nowrap py-6 pl-24 xs:pl-16 xl:p-0"
            >
              <div className="flex items-center pb-0.5 text-gray-form lg:hidden">
                <PawSmallIcon />
              </div>
              <span className="relative">
                {items[option]}
                <span className="absolute -bottom-0.5 hidden h-px  w-full scale-0 bg-black transition-all duration-300  group-hover:scale-100 lg:block"></span>
              </span>
            </Link>
            {index !== typedItems.length - 1 && (
              <div className="absolute bottom-0 h-[0.5px] w-1/2 bg-gray-form opacity-50 lg:hidden"></div>
            )}
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
