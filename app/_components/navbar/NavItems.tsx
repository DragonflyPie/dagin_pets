import Link from "next/link";
import { PawSmallIcon } from "../commons/icons";

interface NavItemsProps {
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

const NavItems = ({ handleClick, items }: NavItemsProps) => {
  const typedItems = Object.keys(items) as Array<keyof typeof items>;
  return (
    <>
      {typedItems.map((option, index) => {
        return (
          <li
            onClick={handleClick}
            key={option}
            className="group relative flex w-full cursor-pointer justify-center transition-all  duration-300 hover:bg-blue-light lg:gap-0 lg:p-0 lg:hover:bg-inherit"
          >
            <Link
              href={`#${option}`}
              className="flex w-full gap-6 whitespace-nowrap"
            >
              <span className="relative">
                {items[option]}
                <span className="absolute -bottom-0.5 hidden h-px  w-full scale-0 bg-black transition-all duration-300  group-hover:scale-100 lg:block"></span>
              </span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
