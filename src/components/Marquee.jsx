"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Marquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;
  let animationFrameId = null; // Store the animation frame ID

  const animate = () => {
    if (firstText.current && secondText.current) {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set([firstText.current, secondText.current], { xPercent: xPercent });
      xPercent += 0.04 * direction;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (secondText.current) {
      gsap.set(secondText.current, {
        left: secondText.current.getBoundingClientRect().width,
      });
    }

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top",
        pinSpacer: false,
        onUpdate: (e) => (direction = e.direction * 1),
      },
    });

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Cancel the animation frame when unmounting
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative flex h-[28vh] w-full overflow-hidden bg-myWhite">
      <div className="absolute z-10 -translate-x-3 top-2/4 border-y-2 border-skin-border border-mainColor text-myRed">
        <div
          ref={slider}
          className="relative capitalize whitespace-nowrap text-9xl font-creamCake"
        >
          <p className="relative pr-5 m-0" ref={firstText}>
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola
            - breizh cola -
          </p>
          <p className="absolute top-0 left-[100%] m-0 pr-5" ref={secondText}>
            breizh cola - breizh cola - breizh cola - breizh cola - breizh cola
            - breizh cola -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
