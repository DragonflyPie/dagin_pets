import Link from "next/link";
import { NAV_OPTIONS } from "./data/nav_data";

const FooterNavigation = () => {
  return (
    <>
      {NAV_OPTIONS.map((option) => {
        return (
          <li
            key={option.href}
            className="group  flex cursor-pointer   transition-all duration-300 hover:text-gray-200"
          >
            <Link
              href={option.href}
              className="relative w-fit whitespace-nowrap"
            >
              {option.label}

              <span className="absolute -bottom-0.5 block h-px w-full scale-0 bg-white transition-all  duration-300 group-hover:scale-100"></span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default FooterNavigation;
