"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  useGSAP(() => {
    const anim = gsap.from(".scene p", {
      scale: 0,
    });

    const st = ScrollTrigger.create({
      trigger: ".scene",
      start: "top top+=20",
      end: "bottom top",
      scrub: true,
      markers: true,
      pin: true,
      animation: anim,
      onLeave: (self) => {
        self.kill(true);
        anim.progress(1);
      },
    });

    // // Cleanup on component unmount
    // return () => {
    //   st.kill();
    //   anim.kill();
    // };
  }, []);

  return (
    <div className="p-5">
      <section className="h-[calc(100vh-40px)] bg-teal-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 1</p>
      </section>
      <section className="h-[calc(100vh-40px)] bg-teal-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 2</p>
      </section>
      <section className="scene h-[calc(100vh-40px)] bg-cyan-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 3</p>
      </section>
      <section className="h-[calc(100vh-40px)] bg-teal-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 4</p>
      </section>
      <section className="h-[calc(100vh-40px)] bg-teal-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 5</p>
      </section>
      <section className="h-[calc(100vh-40px)] bg-teal-500 flex justify-center items-center mb-5">
        <p className="text-lg">Section 6</p>
      </section>
    </div>
  );
};

export default Test;
