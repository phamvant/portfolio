import { useEffect, useRef } from "react";

export default function TimelineCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cardRef.current?.style.setProperty("--x", e.offsetX.toString() + "px");
      cardRef.current?.style.setProperty("--y", e.offsetY.toString() + "px");
      cardRef.current?.style.setProperty("--opacity", "1");

      console.log(cardRef.current?.getAttribute("style"));
    };

    const handleMouseOut = () => {
      cardRef.current?.style.setProperty("--opacity", "0");
    };

    const currentCardRef = cardRef.current;

    if (currentCardRef) {
      currentCardRef.addEventListener("mousemove", handleMouseMove);
      currentCardRef.addEventListener("mouseout", handleMouseOut);
    }

    return () => {
      if (currentCardRef) {
        currentCardRef.removeEventListener("mousemove", handleMouseMove);
        currentCardRef.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col pl-6 mb-8 event rounded-xl border-2 border-gray-800 py-4 backdrop-blur-md pointer-events-none">
        {children}
      </div>

      <div className="absolute inset-0">
        <div
          ref={cardRef}
          className="flex flex-col pl-6 mb-8 event-mask rounded-xl border-2 border-gray-800 py-4 bg-white/20 text-transparent"
          style={{
            opacity: "var(--opacity, 0)",
            mask: `radial-gradient(
              25rem 25rem at var(--x, 0) var(--y, 0),
              #000 1%,
              transparent 50%
            )`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
