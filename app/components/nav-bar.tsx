"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBurger from "./burger-navbar";
import { useEffect, useRef, useState } from "react";
import DropdownNav from "./navbar-dropdown";
import ThemeToggle from "./theme-toggle";

export default function NavBar() {
  const [burger, setBurger] = useState(true);

  const navRef = useRef(null);
  const [navDropdown, setNavDropdown] = useState(
    gsap.timeline({ reversed: true }),
  );

  const mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(max-width: 700px)", () => {
      gsap.from(".nav-content", {
        top: -200,
        duration: 1,
      });
    });

    mm.add("(max-width: 700px)", () => {
      navDropdown
        .to(navRef.current, {
          height: "350%",
          duration: 0.5,
        })
        .from(
          ".nav-content",
          {
            x: -10,
            opacity: 0,
            stagger: {
              each: 0.1,
            },
          },
          "<",
        );
    });
  }, []);

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

      <div className="fixed justify-center top-0 z-10 flex flex-row  flex-wrap md:flex-row items-center w-full h-16 md:px-40 px-2">
        <div
          className=" md:justify-between md:flex w-full border-2 p-4 rounded-xl border-gray-600 mt-2 backdrop-blur-md h-16 md:px-20"
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

          <div className="md:block hidden">ThuanPham</div>
          <div className="py-4 md:py-0 md:gap-20 gap-4 z-11 flex flex-col md:flex-row mt-4 md:mt-0">
            <p className="nav-content">Highlight</p>
            <p className="nav-content">Projects</p>
            <p className="nav-content">Contact</p>
            <div className="hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
