import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { flogo } from "../assets";
import { Sling as Hamburger } from 'hamburger-react';

const Logo = ({ isScrolling }) => (
  <div className={`flex items-center transition-transform duration-700 ease-in-out ${isScrolling ? "transform -translate-x-[200%]" : "transform translate-x-0"}`}>
    <img src={flogo} alt="logo" className="w-30 h-24 object-contain" />
  </div>
);

const MobileNav = ({ toggle, setToggle, isScrolling }) => (
  <div className={`md:hidden ${isScrolling ? "opacity-0 transition-all duration-1000" : "opacity-100 transition-all duration-300"}`}>
    <Hamburger
      toggled={toggle}
      toggle={setToggle}
      size={50}
      easing="ease-in"
      duration={0.7}
      rounded
    />
  </div>
);



const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    let scrollTimeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center ${
        isLargeScreen ? "py-5"  : "py-2 "
      } top-0 z-20 bg-primary transition-all duration-1000 ${
        (isScrolling || toggle) ? "bg-opacity-0" : "bg-opacity-80"
      } fixed`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(" ");
            window.scrollTo(0, 0);
          }}
        >
          <Logo isScrolling={isScrolling} />
        </Link>
        <MobileNav toggle={toggle} setToggle={setToggle} isScrolling={isScrolling} />

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] md:min-w-[140px] sm:min-w-[160px] z-10 rounded-xl shadow-2xl border border-gray-700/30`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-6 w-full">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-l-2 border-purple-400"
                    : "text-secondary font-poppins font-medium hover:text-white hover:bg-gray-700/20"
                } text-[20px] md:text-[20px] sm:text-[18px] cursor-pointer transition-all duration-300 ease-in-out px-3 py-2 rounded-lg w-full`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`} className="block w-full">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
