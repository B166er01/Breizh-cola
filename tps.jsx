"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Screen = () => {
  const screenRef = useRef(null);
  const targetRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // useEffect(() => {
  //   const target = targetRef.current;
  //   const screen = screenRef.current;

  //   // Create an Intersection Observer instance
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting && !hasAnimated) {
  //           // Animation with GSAP when the element comes into view for the first time
  //           gsap.to(target, {
  //             opacity: 1,
  //             y: 0,
  //             duration: 1,
  //             ease: "power2.out",
  //           });
  //           setHasAnimated(true); // Set state to true to prevent reverse animation
  //         }
  //       });
  //     },
  //     { threshold: 0.9 } // Adjust the threshold value as needed
  //   );

  //   // Observe the target element
  //   if (target) observer.observe(target);

  //   // Cleanup observer on component unmount
  //   return () => {
  //     if (target) observer.unobserve(target);
  //   };
  // }, [hasAnimated]); // Dependency on hasAnimated to avoid re-creating observer

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-slate-600 text-8xl"
      ref={screenRef}
    >
      <div
        ref={targetRef}
        className="flex items-center justify-center h-64 text-white bg-blue-500"
      >
        <span>La receete</span>
      </div>
    </div>
  );
};

export default Screen;
