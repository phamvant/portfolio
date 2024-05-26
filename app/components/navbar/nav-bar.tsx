"use client";

import NavBurger from "./burger-navbar";
import { useRef, useState } from "react";
import ThemeToggle from "../theme-toggle";
import { Link } from "react-scroll";

export default function NavBar() {
  const [burger, setBurger] = useState(true);

  const navRef = useRef(null);
  // const [navDropdown, setNavDropdown] = useState(
  //   gsap.timeline({ reversed: true }),
  // );

  // const mm = gsap.matchMedia();

  // useGSAP(() => {
  //   mm.add("(max-width: 500px)", () => {
  //     navDropdown
  //       .to(navRef.current, {
  //         height: "350%",
  //         duration: 0.5,
  //       })
  //       .from(
  //         ".nav-content",
  //         {
  //           x: -10,
  //           opacity: 0,
  //           stagger: {
  //             each: 0.1,
  //           },
  //         },
  //         "<",
  //       );
  //   });
  // }, []);

  // useEffect(() => {
  //   if (navDropdown) {
  //     navDropdown.reversed(burger);
  //   }
  // }, [burger]);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setBurger(true);
  //   });
  // }, []);

  return (
    <div className="relative">
      <div className="md:hidden flex-1"></div>

      <div className="fixed justify-center top-8 z-10 flex flex-row  flex-wrap md:flex-row items-center w-full h-16 md:px-[5%] xl:px-[10%] px-2">
        <div
          className=" md:justify-between md:flex w-full border-[1px] p-4 rounded-xl border-gray-600 backdrop-blur-md h-16 md:px-20"
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
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="md:flex items-center hidden nav-content hover:text-xl text-md transition-all duration-300 animate-fadedown"
          >
            ThuanPham
          </Link>
          <div className="py-4 md:py-0 md:gap-12 gap-4 z-11 md:items-center flex flex-col md:flex-row mt-4 md:mt-0">
            <Link
              to="timeline"
              spy={true}
              smooth={true}
              offset={800}
              duration={500}
              className="nav-content hover:text-xl text-md transition-all duration-300 cursor-default animate-fadedown"
            >
              Highlight
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              // offset={800}
              duration={500}
              className="nav-content hover:text-xl text-md transition-all duration-300 cursor-default animate-fadedown"
            >
              Projects
            </Link>
            <p className="nav-content hover:text-xl text-md transition-all duration-300 cursor-default animate-fadedown">
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
