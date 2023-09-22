import Image from "next/image";
import logo from "../public/logo_with_text_small.png";
import MessengersMenu from "./MessengersMenu";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import NavMenu from "./NavMenu";
import useStore from "./store";

const Navbar = () => {
  return (
    <div className="z-30 flex w-full items-center justify-center bg-white shadow-[0px_3px_34px_0px_#10101010]">
      <div className="flex w-full max-w-[1440px] items-center justify-end gap-3 px-20 font-inter font-medium xl:gap-12">
        <div className="relative mr-auto h-[62px] w-[88px] md:h-[87px] xl:h-[113px]">
          <Image src={logo} alt="DaginPets Logo" fill />
        </div>
        <nav className="">
          <NavMenu top />
        </nav>
        <MessengersMenu />
        <Button text="Написать" size="small" modal />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
