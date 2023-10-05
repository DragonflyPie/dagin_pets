import Link from "next/link";

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
      {typedItems.map((option) => {
        if (top && option === "welcome") return;
        return (
          <li
            onClick={handleClick}
            key={option}
            className="group flex w-full cursor-pointer justify-start py-6 pl-10 pr-4 transition-all duration-300 hover:bg-[#adeaff] lg:p-0 lg:hover:bg-inherit"
          >
            <Link href={`#${option}`} className=" w-full whitespace-nowrap">
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
