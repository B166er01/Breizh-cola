"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Screen = () => {
  const screenRef = useRef(null);
  const targetRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    const screen = screenRef.current;

    // Create an Intersection Observer instance to observe screenRef
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Animation with GSAP when screenRef comes into view
            gsap.to(target, {
              opacity: 1,
              y: "0%", // Ensures it animates to its normal position
              duration: 1,
              delay: 0.5,
              ease: "power2.out",
            });
            setHasAnimated(true); // Set state to true to prevent reverse animation
          }
        });
      },
      { threshold: 0.9 } // Adjust the threshold value as needed
    );

    // Observe the screenRef element
    if (screen) observer.observe(screen);

    // Cleanup observer on component unmount
    return () => {
      if (screen) observer.unobserve(screen);
    };
  }, [hasAnimated]); // Dependency on hasAnimated to avoid re-creating observer

  return (
    <div
      className="flex items-center justify-center w-full h-screen text-6xl bg-slate-600"
      ref={screenRef}
    >
      <div className="flex overflow-hidden text-5xl">
        <div
          ref={targetRef}
          className="transform translate-y-12 opacity-0" // Initial styles for the animation
        >
          des ingredients
        </div>
      </div>
    </div>
  );
};

export default Screen;
