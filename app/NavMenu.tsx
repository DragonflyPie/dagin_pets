"use client";
import { useRef, useState } from "react";
import NavItems from "./NavItems";
import { Down } from "./components/icons";
import useClickOutside from "./hooks/useClickOutside";

const NavMenu = () => {
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
    <div className="" ref={navRef}>
      <div className="cursor-pointer lg:hidden" onClick={toggleNavOpen}>
        <Down />
      </div>

      <ul
        className={`absolute flex-col justify-end gap-8 bg-white font-inter text-sm lg:static lg:flex lg:flex-row lg:text-xs xl:gap-12 xl:text-sm
        ${navOpen ? "flex" : "hidden"}
        `}
      >
        <NavItems top />
      </ul>
    </div>
  );
};

export default NavMenu;
