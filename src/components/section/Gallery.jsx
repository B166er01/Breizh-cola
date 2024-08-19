"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Gallery = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      scrollTrigger: {
        trigger: galleryRef.current,
        pin: true,
        start: "top top",
        end: () =>
          `+=${
            containerRef.current.scrollWidth - galleryRef.current.clientWidth
          }`,
        scrub: true,
        snap: {
          snapTo: 1 / (sections.length - 1), // Snap to each panel's width
          duration: 0.4,
          delay: 0.1,
          ease: "power1.inOut",
        },
        // markers: true,
      },
    });
  });

  return (
    <div ref={galleryRef} className="w-full h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="w-[300%] h-screen flex flex-nowrap bg-amber-700"
      >
        <div className="w-screen h-screen bg-blue-200 panel">one</div>
        <div className="w-screen h-screen bg-blue-400 panel">two</div>
        <div className="w-screen h-screen bg-blue-600 panel">three</div>
      </div>
    </div>
  );
};

export default Gallery;
