import Image from "next/image";
import logo from "../public/logo_with_text_small.png";
import MessengersMenu from "./MessengersMenu";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="z-30 flex min-h-[62px] w-full items-center  justify-center  bg-white shadow-[0px_3px_34px_0px_#10101010] md:min-h-[87px]">
      <div className="flex w-full max-w-[1440px] items-center justify-end gap-3 px-2 font-inter font-medium xs:px-4 md:px-6 lg:gap-6 xl:px-16  2xl:gap-12">
        <DropdownMenu />
        <div className="relative mr-auto hidden aspect-square h-[41px] shrink-0 xs:block md:h-[65px] xl:h-[113px]">
          <Image src={logo} fill alt="DaginPets Logo" />
        </div>
        <nav className="hidden lg:block">
          <ul className=" flex w-full flex-col justify-end gap-6 font-inter text-sm lg:flex-row  lg:text-xs xl:gap-12 xl:text-sm">
            <NavItems top />
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
