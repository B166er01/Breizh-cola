"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductTitle = ({ name, color }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const ttRef = useRef(null);
  const subRef = useRef(null);

  // Mapping params.name to specific colors
  const colorMapping = {
    original: "text-mainColor",
    cherry: "text-cherryColor",
    // Add more mappings as needed
  };

  const textStrokeMapping = {
    original: "text-stroke-mainColor",
    cherry: "text-stroke-cherryColor",
    // Add more mappings as needed
  };

  const selectedColor = colorMapping[name] || "text-secondColor";
  const selectedStroke = textStrokeMapping[name] || "text-stroke-secondColor";

  useGSAP(() => {
    const refs = [ref1, ref2, ref3, ref4, ref5];
    const translateYValues = ["100%", "200%", "300%", "400%", "500%"];

    refs.forEach((ref, index) => {
      gsap.to(ref.current, {
        translateY: translateYValues[index],
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: "#single",
          start: "top top",
          end: "bottom 99%",
          // markers: true,
          // scrub: 0.9,
        },
      });
    });
  }, []);

  return (
    <div className="w-full py-6">
      <h1
        ref={ttRef}
        className={`py-6 capitalize text-[150px] font-creamCake text-mainColor  text-center`}
      >
        breizh cola
      </h1>
      <div ref={subRef} className="relative mt-6 ">
        <div
          className={`absolute top-0 z-10 uppercase -translate-x-1/2 opacity-100 left-1/2 text-8xl text-stroke ${selectedColor} ${selectedStroke} font-poppins`}
        >
          {name}
        </div>
        <div
          ref={ref1}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke  text-secondColor font-poppins opacity-70 ${selectedStroke} `}
        >
          {name}
        </div>
        <div
          ref={ref2}
          className={`absolute top-0 uppercase -translate-x-1/2 opacity-50 left-1/2 text-8xl text-stroke text-stroke-mainColor text-secondColor font-poppins ${selectedStroke} `}
        >
          {name}
        </div>
        <div
          ref={ref3}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke  text-secondColor font-poppins opacity-30 ${selectedStroke} `}
        >
          {name}
        </div>
        <div
          ref={ref4}
          className={`absolute top-0 uppercase -translate-x-1/2 left-1/2 text-8xl text-stroke  font-poppins opacity-10 text-secondColor ${selectedStroke} `}
        >
          {name}
        </div>
        <div
          ref={ref5}
          className={`absolute top-0 uppercase -translate-x-1/2 opacity-5 left-1/2 text-8xl text-stroke  font-poppins text-secondColor ${selectedStroke} `}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
