"use client";

import React, { useEffect, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const SmoothScroll = ({ children }: { children: any }) => {
  // 1.
  const windowSize = useWindowSize();
  //2.
  const scrollingContainerRef = useRef<HTMLInputElement>(null);
  // 3.
  // const data = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0,
  // };

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    // requestAnimationFrame(() => smoothScrollingHandler());
    let lastScroll = window.scrollY;

    window.addEventListener("scroll", () => {
      if (window.scrollY > lastScroll) {
        console.log("down");
      }
    });
  }, []);

  const smoothScrollingHandler = () => {
    // data.current = window.scrollY;
    // data.previous += (data.current - data.previous) * data.ease;
    // data.rounded = Math.round(data.previous * 100) / 100;
    // if (scrollingContainerRef.current?.style) {
    //   // scrollingContainerRef.current.style.transform = `translateX(0px)`;
    // }
    // // Recursive call
    // requestAnimationFrame(() => smoothScrollingHandler());
  };

  return <div ref={scrollingContainerRef}>{children}</div>;
};

export default SmoothScroll;
