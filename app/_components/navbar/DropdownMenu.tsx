"use client";

import { useRef, useState } from "react";
import {
  CloseIcon,
  Down,
  Instagram,
  MenuIcon,
  PhoneWhite,
  Telegram,
  WhatsAppWhite,
} from "../commons/icons";
import useClickOutside from "../../_utilities/hooks/useClickOutside";
import cat_purr from "@/public/images/cat_purr.png";
import logo from "@/public/images/logo_with_text.png";
import Image from "next/image";
import NavItems from "./NavItems";
import MessengersMenu from "./MessengersMenu";
import MessengerItems from "../commons/MessengerItems";
import Messenger from "../commons/Messenger";
import { Paw } from "../commons/vectors";

interface DropdownMenuProps {
  items: {
    welcome: string;
    about: string;
    services: string;
    reviews: string;
    faq: string;
    contacts: string;
  };
  text: string;
}

const DropdownMenu = ({ items, text }: DropdownMenuProps) => {
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
    <div className="z-20 flex" ref={navRef}>
      <div className="cursor-pointer lg:hidden" onClick={toggleNavOpen}>
        <MenuIcon />
      </div>
      <div
        className={`pointer-events-none fixed inset-0 bg-black transition-all duration-300 ${
          navOpen ? "opacity-30" : "opacity-0"
        }`}
      ></div>
      <div
        className={` fixed bottom-0 left-0 top-0 flex w-full min-w-[16rem] flex-col bg-white  transition-all duration-500 xs:w-auto
        ${navOpen ? "" : "-translate-x-full"}
        `}
      >
        <div
          className="absolute right-[1.125rem] top-[1.125rem] z-10 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={closeNav}
        >
          <CloseIcon />
        </div>
        <div className="relative flex h-full  flex-col p-4">
          <div className="absolute bottom-4 right-4 w-[170px]">
            <Paw />
          </div>
          <Image src={logo} alt="logo" width={70} height={70} />
          <nav className=" flex h-full w-full flex-col gap-12 pt-12 font-inter text-base font-medium tracking-widest">
            <NavItems handleClick={closeNav} items={items} />
          </nav>
        </div>
        <div className="mt-auto flex w-full flex-col gap-4 bg-gray-dark p-4 text-xs  text-white">
          <h4 className="font-lato text-sm font-light">{text}</h4>
          <ul className="flex flex-col gap-4 font-inter font-light ">
            <MessengerItems />
          </ul>
          <p className=" text-[0.625rem] font-extralight md:text-right md:text-sm">
            Dagin Pets Relocation © Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
