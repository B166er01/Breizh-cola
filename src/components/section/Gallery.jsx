"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductOriginal from "./ProductOriginal";
import Screen from "./Screen";
import ProductCherry from "./ProductCherry";
import Infos from "./Infos";
import Fun from "./Fun";

const Gallery = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        pinSpacer: false,
        scrub: 0.8,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.35,
        },
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });
  });

  return (
    <div
      className="w-[600%] h-screen flex flex-nowrap overscroll-none intro_slide"
      ref={containerRef}
    >
      <section className="flex items-center justify-center h-screen text-8xl min-w-[100vw] panel">
        <Fun />
      </section>
      <section className="flex items-center justify-center h-screen text-8xl min-w-[100vw] panel">
        <ProductOriginal />
      </section>
      <section className="flex items-center justify-center h-screen text-8xl min-w-[100vw] panel">
        <ProductCherry />
      </section>
      <section className="flex items-center justify-center h-screen text-8xl min-w-[100vw] panel">
        <ProductOriginal />
      </section>
    </div>
  );
};

export default Gallery;
