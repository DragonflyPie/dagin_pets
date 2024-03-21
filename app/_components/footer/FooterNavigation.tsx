import { getDictionary } from "@/app/_utilities/getDictionary";
import { Locale } from "@/i18n.config";
import Link from "next/link";

interface FooterNavigationProps {
  lang: Locale;
}

const FooterNavigation = async ({ lang }: FooterNavigationProps) => {
  const { navigation } = await getDictionary(lang);
  const items = Object.keys(navigation) as Array<keyof typeof navigation>;
  return (
    <>
      {items.map((option) => {
        return (
          <li
            key={option}
            className="group cursor-pointer font-geometria transition-all duration-300 hover:text-gray-200"
          >
            <Link
              href={`#${option}`}
              className="relative w-fit whitespace-nowrap"
            >
              {navigation[option]}

              <span className="absolute -bottom-0.5 block h-px w-full scale-0 bg-white transition-all  duration-300 group-hover:scale-100"></span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default FooterNavigation;
