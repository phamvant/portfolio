"use client";

import { RxHamburgerMenu } from "react-icons/rx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  let navbarTl: any;
  useGSAP(() => {
    gsap.from(".nav-content", {
      y: -100,
      stagger: 0.1,
    });

    navbarTl = gsap.timeline({ reversed: true });

    navbarTl.to(".nav-des", {
      y: 220,
      stagger: {
        each: 0.1,
      },
    });
  });

  return (
    <div className="relative">
      <div className="md:hidden flex-1"></div>
      <div
        id="navbar-bg"
        className=" relative -top-40 z-10 flex flex-col w-full h-fit bg-black/20 backdrop-blur-md"
      >
        <div className="p-4 pb-0 font-thin nav-des text-white">Highlight</div>
        <div className="p-4 pb-0 font-thin nav-des text-white">Project</div>
        <div className="p-4 pb-4 font-thin nav-des text-white">Contact</div>
      </div>
      <div className="fixed top-0 z-10 flex flex-row flex-wrap md:flex-row items-center w-full h-16 backdrop-blur-md md:justify-around">
        <div id="burger-ico" className="pl-4 md:hidden ">
          <RxHamburgerMenu
            size={20}
            color="white"
            onClick={() => {
              if (navbarTl) {
                navbarTl.reversed(!navbarTl.reversed());
              }
            }}
          />
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
