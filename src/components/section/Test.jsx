"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const containerRef = useRef(null);
  const paragrapheRef = useRef(null);
  const im1Ref = useRef(null);

  useGSAP(() => {
    const text = paragrapheRef.current.innerText;
    paragrapheRef.current.innerHTML = ""; // Clear existing text

    // Split the paragraph into characters and wrap each in a span
    const characters = text.split("").map((char, index) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.opacity = 0; // Set initial opacity to 0
      paragrapheRef.current.appendChild(span);
      return span;
    });

    const anim = gsap.to(
      characters,
      {
        opacity: 1,
        stagger: {
          each: 0.4, // Controls the speed of letter reveal
        },
        ease: "none",
      },
      "one"
    );

    // Combine text and image animations into a single timeline
    const combinedAnim = gsap.timeline().add(anim, "start"); // Start both animations together

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      //markers: true,
      pin: true,
      animation: combinedAnim,
      onLeave: (self) => {
        self.kill(true);
        combinedAnim.progress(1);
      },
    });

    const anim2 = gsap.fromTo(
      im1Ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
      },
      "one"
    );

    const st2 = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      markers: true,
      // pin: true,
      animation: anim2,
      onLeave: (self) => {
        self.kill(true);
        anim2.progress(1);
      },
    });
  });

  return (
    <div className="p-5 ">
      <div
        ref={containerRef}
        className="flex flex-col relative  w-full h-screen text-5xl leading-tight uppercase  text-mainColor font-poppins pt-[20vh]"
      >
        <div className="text-center">
          <div ref={paragrapheRef} className="w-1/2 mx-auto">
            Présent lors de nombreux événements, Breizh Cola est un véritable
            partenaire du développement culturel en Bretagne.
          </div>
        </div>
        <div
          ref={im1Ref}
          className="w-[250px] h-[250px]  z-20 absolute top-1/2 left-1/2"
        >
          <Image
            src={"/image/sponsorts/music/AuBDM.png"}
            alt="toto"
            width={200}
            height={200}
            layout="responsive"
          />
        </div>
      </div>
      <div className="h-[1vh]"></div>
    </div>
  );
};

export default Test;
