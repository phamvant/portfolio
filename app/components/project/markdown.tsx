"use client";

import { MDXProps } from "mdx/types";
import { ReactNode, useEffect, useState } from "react";

import { LuArrowUpRight } from "react-icons/lu";

const Markdown = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={togglePopup}>
        <div className="flex gap-2 items-center cursor-pointer hover:underline animate-bounce">
          How I built this
          <LuArrowUpRight />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out z-50 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out max-w-screen-xl w-[90%] md:w-full h-[90vh] overflow-auto ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="flex justify-between mb-4">
            <div />
            <button
              onClick={togglePopup}
              className="size-8 bg-red-500 text-white rounded-3xl"
            ></button>
          </div>

          <div className="prose-base md:px-20 md:py-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Markdown;
