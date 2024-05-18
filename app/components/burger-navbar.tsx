"use client";

import { useState } from "react";

export default function NavBurger({
  burger,
  setBurger,
}: {
  burger: boolean;
  setBurger: any;
}) {
  const genericHamburgerLine = `h-1 w-8 mb-1 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  return (
    <button
      className=" flex flex-col h-8 w-8 rounded justify-center items-center group"
      onClick={() => {
        setBurger(!burger);
      }}
    >
      <div
        className={`${genericHamburgerLine} ${
          !burger
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          !burger ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          !burger
            ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
}
