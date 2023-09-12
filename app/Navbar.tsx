import Image from "next/image";
import logo from "../public/logo_with_text_small.png";
import Messengers from "./Messangers";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <div className="z-10 flex w-full items-center justify-end gap-12 font-inter font-medium">
      <div className="relative mr-auto h-[113px] w-[88px]">
        <Image src={logo} alt="DaginPets Logo" fill />
      </div>
      <nav className="">
        <ul className="flex gap-12">
          <li className="cursor-pointer underline-offset-2 hover:underline">
            Главная
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            Услуги
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            О компании
          </li>
          <li className="cursor-pointer underline-offset-2 hover:underline">
            Часто задаваемые вопросы
          </li>
        </ul>
      </nav>
      <Messengers />
      <Button text="Написать" size="small" />
      <LanguageSelector />
    </div>
  );
};

export default Navbar;
