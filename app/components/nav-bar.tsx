"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBurger from "./burger-navbar";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [burger, setBurger] = useState(true);
  const [navDropdown, setNavDropdown] = useState(
    gsap.timeline({ reversed: true }),
  );

  useGSAP(() => {
    gsap.from(".nav-content", {
      y: -100,
      stagger: 0.1,
    });

    navDropdown.to(".nav-des", {
      y: 220,
      stagger: {
        each: 0.1,
      },
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
      <div className="fixed -top-40">
        <div className="p-4 pb-0 font-thin nav-des text-white">Highlight</div>
        <div className="p-4 pb-0 font-thin nav-des text-white">Project</div>
        <div className="p-4 pb-4 font-thin nav-des text-white">Contact</div>
      </div>
      <div className="fixed top-0 z-10 flex flex-row flex-wrap md:flex-row items-center w-full h-16 backdrop-blur-md md:justify-around">
        <div id="burger-ico" className="pl-4 md:hidden ">
          <NavBurger burger={burger} setBurger={setBurger} />
        </div>
        <div className="hidden nav-content md:flex md:justify-between md:w-40">
          <div>PhamVanThuan</div>
        </div>
        <div className="hidden gap-20 md:flex">
          <p className="nav-content">Highlight</p>
          <p className="nav-content">Projects</p>
          <p className="nav-content">Contact</p>
        </div>
      </div>
    </div>
  );
}
