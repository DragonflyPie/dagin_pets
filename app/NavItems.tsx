import Link from "next/link";
import { NAV_OPTIONS } from "./data/nav_data";

interface NavItemsProps {
  top?: boolean;
  handleClick?: () => void;
}

const NavItems = ({ handleClick, top }: NavItemsProps) => {
  return (
    <>
      {NAV_OPTIONS.map((option) => {
        if (top && option.href === "#welcome") return;
        return (
          <li
            onClick={handleClick}
            key={option.href}
            className="group flex w-full cursor-pointer justify-start py-6 pl-10 pr-4 transition-all duration-300 hover:bg-[#adeaff] lg:p-0 lg:hover:bg-inherit"
          >
            <Link href={option.href} className=" w-full whitespace-nowrap">
              <span className="relative">
                {option.label}
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
