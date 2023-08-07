import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const SlidingText = () => {
  const Sliding = ({ text, direction }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    let xPercent = 0;

    useEffect(() => {
      requestAnimationFrame(animate);
    }, []);

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });
      requestAnimationFrame(animate);
      xPercent += 0.06 * direction;
    };

    return (
      <div className="flex w-[120vh] whitespace-nowrap leading-none">
        <p ref={firstText} className="pr-12">
          {text} <span className="pl-8">•</span>
        </p>
        <p ref={secondText} className="pr-12">
          {text} <span className="pl-8">•</span>
        </p>
        <p ref={thirdText} className="pr-12">
          {text} <span className="pl-8">•</span>
        </p>
      </div>
    );
  };

  return (
    <div>
      <div className="h1-styles uppercase text-shadow overflow-hidden pt-10">
        <Sliding text="Keep contributing" direction={-1} />
        <Sliding text="See you for 2023" direction={1} />
      </div>
    </div>
  );
};

export default SlidingText;
