"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MagneticButtons from "../MagneticButtons";
import AnimatedLink from "../AnimatedLink";
import BreizhCola from "../experience/views/BreizhCola";

const ProductOriginal = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  const buttonRef = useRef(null);
  const screenRef = useRef(null);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleAnimation = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Animation with GSAP when screenRef comes into view
          gsap
            .timeline()
            .to(
              [
                ref1.current,
                ref2.current,
                ref3.current,
                ref4.current,
                ref5.current,
                ref6.current,
                ref7.current,
              ],
              {
                y: 0,
                duration: 0.6,
                ease: "power4.out",
                stagger: 0.05,
              }
            )
            .to(buttonRef.current, { scale: 1, ease: "back.out" });

          setHasAnimated(true); // Prevent reverse animation
        }
      });
    };

    // Create an Intersection Observer instance to observe screenRef
    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.5,
    });

    if (screenRef.current) observer.observe(screenRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (screenRef.current) observer.unobserve(screenRef.current);
    };
  }, [hasAnimated]);

  return (
    <div id="blue" className="relative w-full h-screen" ref={screenRef}>
      <BreizhCola />
      <div
        className="relative scale-0 w-[440px] h-[220px] top-[50vh] left-1/2"
        ref={buttonRef}
      >
        <MagneticButtons>
          <button className=" -rotate-6 border-mainColor h-[220px] text-6xl uppercase rounded-[50%] cursor-pointer w-[440px] border font-bold hover:text-secondColor hover:bg-mainColor">
            <AnimatedLink href="/product/original">decouvrez le</AnimatedLink>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-6 ml-20 uppercase font-poppins text-8xl">
        <p className="flex gap-8 overflow-hidden">
          <span ref={ref1} className="translate-y-full">
            la recette
          </span>
          <span
            ref={ref2}
            className="overflow-hidden transition-colors duration-500 translate-y-full text-stroke text-stroke-mainColor text-secondColor"
          >
            originale
          </span>
        </p>
        <p className="flex gap-8 overflow-hidden">
          <span
            ref={ref3}
            className="transition-colors duration-500 translate-y-full text-stroke text-stroke-mainColor text-secondColor"
          >
            Son
          </span>
          <span ref={ref4} className="overflow-hidden translate-y-full">
            secret ?
          </span>
        </p>
        <p className="flex gap-8 mt-12 overflow-hidden text-7xl">
          <span ref={ref5} className="translate-y-full">
            le dosage
          </span>
          <span
            ref={ref6}
            className="transition-colors duration-500 translate-y-full text-stroke text-stroke-mainColor text-secondColor"
          >
            parfait
          </span>
        </p>

        <p className="flex gap-8 mt-12 overflow-hidden text-7xl">
          <span ref={ref7} className="translate-y-full">
            des ingredients
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductOriginal;
