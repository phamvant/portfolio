"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window) {
      return;
    }

    window.addEventListener("mousemove", (e) => {
      if (!cursorRef.current) {
        return;
      }

      if (!cursorOutlineRef.current) {
        return;
      }

      cursorRef.current.style.setProperty("left", e.clientX.toString() + "px");
      cursorRef.current.style.setProperty("top", e.clientY.toString() + "px");

      cursorOutlineRef.current.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 500, fill: "forwards" },
      );
    });
  });

  return (
    <div className="hidden xl:block">
      <div
        className="cursor-dot z-50 size-1 bg-black dark:bg-white fixed pointer-events-none -translate-x-1/2 -translate-y-1/2"
        ref={cursorRef}
      />
      <div
        ref={cursorOutlineRef}
        className="cursor-dot-outline z-50 size-8 bg-black/30 dark:bg-white/30 fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 "
      />
    </div>
  );
}
