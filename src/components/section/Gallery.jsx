"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Gallery = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".intro_slide",
        pin: true,
        pinSpacer: false,
        scrub: 0.5,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: 0.15,
        },
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });
  });

  return (
    <div className="container intro_slide">
      <section className="h-screen bg-blue-200 min-vw-100 panel"></section>
      <section className="h-screen bg-blue-400 min-vw-100 panel"></section>
      <section className="h-screen bg-blue-600 min-vw-100 panel"></section>
    </div>
  );
};

export default Gallery;
