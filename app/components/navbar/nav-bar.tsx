"use client";

import gsap from "gsap";
import NavBurger from "./burger-navbar";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";

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
    <div className="relative">
      <div className="md:hidden flex-1"></div>

      <div className="absolute justify-center top-8 z-10 flex flex-row  flex-wrap md:flex-row items-center w-full h-16 md:px-[5%] xl:px-[20%] px-2">
        <div
          className="md:justify-between md:flex w-full py-16 rounded-xl backdrop-blur-md h-16"
          style={{ WebkitBackdropFilter: "5px" }}
          ref={navRef}
        >
          <div className="flex flex-row justify-between md:hidden items-center">
            <div id="burger-ico" className="md:hidden">
              <NavBurger burger={burger} setBurger={setBurger} />
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
            ThuanPham
          </Link>
          <div className="py-4 md:py-0 md:gap-12 gap-4 z-11 md:items-center flex flex-col md:flex-row mt-4 md:mt-0">
            <Link
              to="highlight"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-content hidden md:block hover:text-xl text-md lg:transition-all lg:duration-300 cursor-default lg:animate-fadedown"
            >
              Highlight
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-content hidden md:block hover:text-xl text-md lg:transition-all lg:duration-300 cursor-default lg:animate-fadedown"
            >
              Projects
            </Link>
            <p className="nav-content hidden md:block hover:text-xl text-md lg:transition-all lg:duration-300 cursor-default lg:animate-fadedown">
              Contact
            </p>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
