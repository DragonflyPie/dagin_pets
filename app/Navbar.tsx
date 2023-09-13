import Image from "next/image";
import logo from "../public/logo_with_text_small.png";
import Messengers from "./Messangers";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="z-10 flex max-w-[1440px] items-center justify-end gap-3 font-inter font-medium xl:gap-12">
      <div className="relative mr-auto h-[113px] w-[88px]">
        <Image src={logo} alt="DaginPets Logo" fill />
      </div>
      <nav className="">
        <NavMenu />
      </nav>
      <Messengers />
      <Button text="Написать" size="small" />
      <LanguageSelector />
    </div>
  );
};

export default Navbar;
