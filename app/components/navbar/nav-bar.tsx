"use client";

import gsap from "gsap";
import NavBurger from "./burger-navbar";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import { CiBurger } from "react-icons/ci";

export default function NavBar() {
  const [burger, setBurger] = useState(true);

  const navRef = useRef(null);
  const [navDropdown, setNavDropdown] = useState(
    gsap.timeline({ reversed: true }),
  );

  useEffect(() => {
    if (navDropdown) {
      navDropdown.reversed(burger);
    }
  }, [burger]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBurger(true);
    });
  }, []);

  return (
    <div className=" md:px-[5%] xl:px-[20%] justify-center z-10 flex flex-row  flex-wrap md:flex-row items-center w-screen pt-4 md:pt-20">
      <div
        className="md:justify-between md:flex w-full px-4 py-4 md:py-0 rounded-xl backdrop-blur-md"
        style={{ WebkitBackdropFilter: "5px" }}
        ref={navRef}
      >
        <div className="flex flex-row justify-between md:hidden items-center">
          <div id="burger-ico" className="md:hidden">
            {/* <NavBurger burger={burger} setBurger={setBurger} /> */}
            <CiBurger size={40} />
          </div>
          <div className="md:hidden">ThuanPham</div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <Link
          to="highlight"
          spy={true}
          smooth={true}
          duration={500}
          className="md:flex items-center hidden nav-content hover:text-xl text-md transition-all duration-300 animate-fadedown"
        >
          THUAN PHAM.
        </Link>
        <div className="hidden md:flex py-4 md:py-0 md:gap-12 gap-4 z-11 md:items-center flex-col md:flex-row mt-4 md:mt-0">
          <Link
            to="highlight"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer nav-content hidden md:block hover:text-xl text-md lg:transition-all lg:duration-300 lg:animate-fadedown"
          >
            Highlight
          </Link>
          <Link
            to="project-1"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer nav-content hidden md:block hover:text-xl text-md lg:transition-all lg:duration-300 lg:animate-fadedown"
          >
            Projects
          </Link>
          <p className="cursor-pointer nav-content hidden md:block hover:text-md text-md lg:transition-all lg:duration-300 lg:animate-fadedown">
            Contact
          </p>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
