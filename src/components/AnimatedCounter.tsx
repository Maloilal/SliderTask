import { gsap } from "gsap";
import React, { useState, useRef, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  initialValue: number;
}

export const AnimatedCounter = (props: AnimatedCounterProps) => {
  const { end, initialValue } = props;
  const [count, setCount] = useState(initialValue);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(countRef.current, {
      duration: 0.5,
      innerHTML: end,
      roundProps: "innerHTML",
      ease: "power1.inOut",
      onUpdate: () => {
        if (!countRef.current) {
          return;
        }
        setCount(Math.round(parseInt(countRef.current.innerHTML)));
      },
    });
  }, [end]);

  return <div ref={countRef}>{count}</div>;
};
