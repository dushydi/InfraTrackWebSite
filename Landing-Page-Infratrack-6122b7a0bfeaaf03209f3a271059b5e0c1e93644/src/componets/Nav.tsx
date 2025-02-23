import React, { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTransform, setMenuTransform] = useState("scaleY(0)");

  useEffect(() => {
    if (isOpen) {
      setMenuTransform("scaleY(1)");
    } else {
      setMenuTransform("scaleY(0)");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed padding-x py-8 z-10 w-full bg-[#e8f6fd]">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Header Logo" width={320} height={46} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-grey"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            onClick={toggleMenu}
          />
        </div>

        <ul
          className={`absolute top-full left-0 w-full bg-[#e8f6fd] shadow-md p-4 flex flex-col items-center gap-4 z-50 transition-transform duration-300 ease-in-out transform origin-top-left`}
          style={{ transform: menuTransform }}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-[#2e4052] hover:text-gray-500 transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
