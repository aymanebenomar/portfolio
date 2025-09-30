import React, { useRef, useEffect, useState } from "react";

const CurvedLoop = ({
  marqueeText = "Your Text ✦ ",
  speed = 1,
  curveAmount = 300,
  direction = "left",
  className = "", // removed 'interactive' for now
}) => {
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setOffset((prev) => (direction === "left" ? prev - speed : prev + speed));
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [speed, direction]);

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height: `${curveAmount / 2}px` }}
    >
      <div
        ref={textRef}
        style={{
          whiteSpace: "nowrap",
          transform: `translateX(${offset}px) translateY(-50%)`,
        }}
        className="absolute top-1/2 left-0 text-6xl md:text-8xl font-bold opacity-10 select-none"
      >
        {marqueeText.repeat(50)}
      </div>
    </div>
  );
};

export default CurvedLoop;
