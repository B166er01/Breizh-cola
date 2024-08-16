"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProductTitle = ({ name }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const ttRef = useRef(null);
  const subRef = useRef(null);

  useGSAP(() => {
    // GSAP animation setup
    const refs = [ref1, ref2, ref3, ref4, ref5];
    const translateYValues = ["100%", "200%", "300%", "400%", "500%"]; // Different translateY values

    refs.forEach((ref, index) => {
      gsap.to(ref.current, {
        translateY: translateYValues[index], // Apply different translateY values
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: "#single", // Element that triggers the animation
          start: "top top", // Start when the top of the trigger hits the top of the viewport
          end: "bottom 99%", // End position for the scroll trigger
          // markers: true, // Show markers for debuggin
          // scrub: 0.9, // Enable reverse on scroll
        },
      });
    });
  }, []);

  return (
    <div className="w-full py-6">
      <h1
        ref={ttRef}
        className="py-6 capitalize text-[150px] font-creamCake text-mainColor  text-center"
      >
        breizh cola
      </h1>
      <div ref={subRef} className="relative mt-6 ">
        <div className="absolute top-0 uppercase -translate-x-1/2 opacity-100 left-1/2 text-8xl text-stroke text-stroke-mainColor text-mainColor font-poppins">
          {name}
        </div>
        <div
          ref={ref1}
          className="absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke text-stroke-mainColor text-mainColor font-poppins opacity-70"
        >
          {name}
        </div>
        <div
          ref={ref2}
          className="absolute top-0 uppercase -translate-x-1/2 opacity-50 left-1/2 text-8xl text-stroke text-stroke-mainColor text-mainColor font-poppins"
        >
          {name}
        </div>
        <div
          ref={ref3}
          className="absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke text-stroke-mainColor text-mainColor font-poppins opacity-30"
        >
          {name}
        </div>
        <div
          ref={ref4}
          className="absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke text-stroke-myWhite text-myRed font-poppins opacity-10"
        >
          {name}
        </div>
        <div
          ref={ref5}
          className="absolute top-0 uppercase -translate-x-1/2 opacity-5 left-1/2 text-8xl text-stroke text-stroke-myWhite text-myRed font-poppins"
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
