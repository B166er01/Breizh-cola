"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import MagneticButtons from "../MagneticButtons";
import { useGSAP } from "@gsap/react";
import AnimatedLink from "../AnimatedLink";
import BreizhCola from "../experience/views/BreizhCola";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: screenRef.current,
          start: "top 40%",
        },
      })
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
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.1,
        },
        "one"
      )
      .to(buttonRef.current, { scale: 1, ease: "back.out", delay: 1.1 }, "one");
  });

  return (
    <div
      id="blue"
      className="relative w-full h-screen bg-secondColor transition-colors duration-500 "
      ref={screenRef}
    >
      <BreizhCola />
      <div
        className="relative scale-0 w-[440px] h-[220px] top-[50vh] left-1/2 "
        ref={buttonRef}
      >
        <MagneticButtons>
          <button className="  -rotate-6 border-mainColor h-[220px] text-6xl uppercase rounded-[50%] cursor-pointer w-[440px] bg-secondColor border  font-bold text-secondCColor hover:text-secondColor hover:bg-mainColor  transition duration-500 ">
            <AnimatedLink href={"/product/original"}>decouvrez le</AnimatedLink>
          </button>
        </MagneticButtons>
      </div>

      <div className="flex flex-col gap-6 ml-20 uppercase font-poppins text-8xl text-secondCColor  ">
        <p className="flex gap-8 overflow-hidden">
          <span ref={ref1} className="translate-y-full">
            la recette
          </span>
          <span
            ref={ref2}
            className="overflow-hidden translate-y-full text-secondColor text-stroke text-stroke-mainColor transition-colors duration-500"
          >
            originale
          </span>
        </p>
        <p className="flex gap-8 overflow-hidden">
          <span
            ref={ref3}
            className="translate-y-full text-secondColor text-stroke text-stroke-mainColor transition-colors duration-500"
          >
            Son
          </span>
          <span ref={ref4} className="overflow-hidden translate-y-full">
            secret ?
          </span>
        </p>
        <p className="flex gap-8 mt-12 overflow-hidden text-7xl ">
          <span ref={ref5} className="translate-y-full">
            le dosage
          </span>
          <span
            ref={ref6}
            className="translate-y-full text-secondColor text-stroke text-stroke-mainColor "
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
