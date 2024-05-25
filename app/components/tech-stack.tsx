"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TechStack() {
  const iconRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    function random(min: any, max: any) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    const randomX = random(10, 100);
    const randomY = random(0, 150);
    const randomTime = random(3, 5);
    const randomAngle = random(8, 12);

    if (iconRef.current) {
      gsap.utils.toArray(iconRef.current.children).forEach((target: any) => {
        gsap.set(target, {
          x: randomX(3),
          y: randomY(1),
          rotation: randomAngle(-1),
        });
        moveX(target, -1);
        moveY(target, -1);
        rotate(target, 1);
      });
    }

    function rotate(target: any, direction: any) {
      gsap.to(target, {
        rotation: randomAngle(direction),
        duration: randomTime(),
        ease: "easeInOut",
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target: any, direction: any) {
      gsap.to(target, {
        x: randomX(direction),
        ease: "easeInOut",
        onComplete: moveX,
        duration: randomTime(),
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target: any, direction: any) {
      gsap.to(target, {
        y: randomY(direction),
        ease: "easeInOut",
        onComplete: moveY,
        duration: randomTime(),
        onCompleteParams: [target, direction * -1],
      });
    }
  });

  return (
    <div className="flex flex-col justify-center flex-wrap">
      <div
        className="flex justify-between md:justify-center size-12 md:size-16"
        ref={iconRef}
      >
        <img
          src="/tech-icon/react.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2"
        />
        <img
          src="/tech-icon/nest.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2"
        />
        <img
          src="/tech-icon/aws.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2"
        />
        <img
          src="/tech-icon/next.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20"
        />
        <img
          src="/tech-icon/docker.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20"
        />
        <img
          src="/tech-icon/flutter.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2"
        />
        <img
          src="/tech-icon/vim.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2 "
        />
        <img
          src="/tech-icon/ts.svg"
          className="backdrop-blur-md rounded-full z-10 bg-blue-100 p-2 dark:bg-white/20"
        />
        <img
          src="/tech-icon/git.svg"
          className="backdrop-blur-md rounded-full z-10 bg-white/20 p-2"
        />
      </div>
    </div>
  );
}
