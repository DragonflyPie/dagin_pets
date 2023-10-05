"use client";

import { useRef, useState } from "react";
import { CloseIcon, Down, MenuIcon } from "../commons/icons";
import useClickOutside from "../../_utilities/hooks/useClickOutside";
import fat_cat from "@/public/images/fat_cat.png";
import Image from "next/image";
import NavItems from "./NavItems";

interface DropdownMenuProps {
  items: {
    welcome: string;
    about: string;
    services: string;
    reviews: string;
    faq: string;
    contacts: string;
  };
}

const DropdownMenu = ({ items }: DropdownMenuProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNavOpen = (e: React.MouseEvent) => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  useClickOutside(navRef, closeNav);
  return (
    <nav className="z-20 mr-auto flex xs:mr-0 lg:hidden" ref={navRef}>
      <div className="cursor-pointer lg:hidden" onClick={toggleNavOpen}>
        <MenuIcon />
      </div>
      <div
        className={`pointer-events-none fixed inset-0 bg-black transition-all duration-300 ${
          navOpen ? "opacity-30" : "opacity-0"
        }`}
      ></div>
      <div
        className={` fixed bottom-0 left-0 top-0 flex w-[300px] flex-col items-center justify-center bg-blue-light transition-all duration-500
        ${navOpen ? "" : "-translate-x-full"}
        `}
      >
        <div
          className="absolute left-4 top-4 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={closeNav}
        >
          <CloseIcon />
        </div>
        <ul className=" flex h-full w-full flex-col justify-center pt-10 font-lato tracking-wider">
          <NavItems handleClick={closeNav} items={items} />
        </ul>
        <div className="mt-auto pb-4">
          <Image src={fat_cat} alt={""} width={200} />
        </div>
      </div>
    </nav>
  );
};

export default DropdownMenu;
