import Image from "next/image";
import logo from "@/public/images/logo_new_slim.png";
import MessengersMenu from "./MessengersMenu";
import Link from "next/link";
import NavItems from "./NavItems";
import DropdownMenu from "./DropdownMenu";
import Button from "../commons/Button";
import LanguageSelector from "./LanguageSelector";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/app/_utilities/getDictionary";
import { MailIcon } from "../commons/icons";

interface NavbarProps {
  lang: Locale;
}

const Navbar = async ({ lang }: NavbarProps) => {
  const { navigation, common, footer } = await getDictionary(lang);

  return (
    <div className="fixed z-30 flex min-h-[62px] w-full items-center  justify-center bg-gray-bg text-white shadow-[0px_3px_34px_0px_#10101010] md:min-h-[87px] xl:min-h-[113px]">
      <div className="flex w-full max-w-[1440px] items-center justify-end gap-2 px-2 font-medium xs:px-4 md:px-6 lg:px-4 xl:gap-6 xl:px-16  2xl:gap-10">
        <DropdownMenu items={navigation} text={footer.footer_title} />
        <Link href={"#welcome"} className="mr-auto">
          <div className="relative aspect-[2] w-[78px] shrink-0 xs:w-[95px] md:w-[125px] xl:w-[160px]">
            <Image
              src={logo}
              fill
              alt="DaginPets Logo"
              sizes="(min-width: 768px) 15vw, 18vw"
              className="object-cover"
              quality={100}
            />
          </div>
        </Link>
        <nav className="hidden lg:block">
          <ul className=" flex flex-col justify-end gap-5 text-sm md:text-xs lg:flex-row xl:gap-6 xl:text-sm  2xl:gap-12">
            <NavItems items={navigation} />
          </ul>
        </nav>
        <MessengersMenu />
        <Link href={"?modal=true&step=1"} scroll={false}>
          <div className="hidden xs:block">
            <Button text={common.contact_button} size="medium" />
          </div>
          <div className="text-honeycomb-default active:text-honeycomb-dark xs:hidden">
            <MailIcon />
          </div>
        </Link>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Navbar;
