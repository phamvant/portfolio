"use client";

import { RxHamburgerMenu } from "react-icons/rx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NavBar() {
  useGSAP(() => {
    gsap.from(".nav-content", {
      y: -100,
      stagger: 0.1,
    });
  });

  return (
    <div className="fixed top-0 z-10 flex items-center w-full h-16 backdrop-blur-md md:justify-around">
      <div className="pl-4 md:hidden">
        <RxHamburgerMenu size={20} color="white" />
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
  );
}
