import Link from "next/link";

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
            className="group relative flex w-full cursor-pointer justify-center bg-none font-geometria font-normal transition-all duration-300 lg:gap-0 lg:p-0 lg:hover:bg-inherit"
          >
            <Link
              href={`#${option}`}
              className="flex w-full gap-6 whitespace-nowrap"
            >
              <span className="relative">
                {items[option]}
                <span className="absolute -bottom-0.5 hidden h-px  w-full scale-0 transition-all duration-300 group-hover:scale-100  group-hover:bg-honeycomb-default lg:block"></span>
              </span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;
