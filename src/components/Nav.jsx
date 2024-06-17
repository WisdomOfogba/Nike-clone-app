import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : hamburger}
            alt="menu"
            className={`${
              toggle ? "fixed" : "absolute"
            } w-[28px] h-[28px] object-contain z-20 cursor-pointer`}
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } h-full flex-col gap-6 lg:hidden bg-coral-red items-center top-0 right-0 w-80 z-10 fixed`}
          >
            <ul className="flex flex-col w-full mt-20">
              {navLinks.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="font-montserrat regular-16 text-white flex justify-center items-center cursor-pointer p-2"
                    onClick={() => setToggle((prev) => !prev)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;