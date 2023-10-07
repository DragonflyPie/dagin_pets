import Image from "next/image";
import logo from "@/public/images/logo_with_text_small.png";
import MessengersMenu from "./MessengersMenu";
import Link from "next/link";
import NavItems from "./NavItems";
import DropdownMenu from "./DropdownMenu";
import Button from "../commons/Button";
import LanguageSelector from "./LanguageSelector";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/app/_utilities/getDictionary";

interface NavbarProps {
  lang: Locale;
}

const Navbar = async ({ lang }: NavbarProps) => {
  const { navigation } = await getDictionary(lang);

  return (
    <div className="z-30 flex min-h-[62px] w-full items-center  justify-center  bg-white shadow-[0px_3px_34px_0px_#10101010] md:min-h-[87px]">
      <div className="flex w-full max-w-[1440px] items-center justify-end gap-3 pl-4 pr-2 font-inter font-medium xs:px-4 md:px-6 lg:gap-6 xl:px-16  2xl:gap-12">
        <DropdownMenu items={navigation} />
        <div className="relative mr-auto hidden aspect-square h-[41px] shrink-0 xs:block md:h-[65px] xl:h-[113px]">
          <Image src={logo} fill alt="DaginPets Logo" />
        </div>
        <nav className="hidden lg:block">
          <ul className=" flex w-full flex-col justify-end gap-6 font-inter text-sm font-medium lg:flex-row lg:text-xs xl:gap-12 xl:text-sm">
            <NavItems top items={navigation} />
          </ul>
        </nav>
        <MessengersMenu />
        <Link href={"?modal=true&step=1"}>
          <Button text="Написать" size="medium" />
        </Link>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;