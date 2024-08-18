"use client";

import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother);

import React, { useRef } from "react";

const ScrollSmottherGsap = ({ children }) => {
  const main = useRef();
  const smoother = useRef();

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    { scope: main }
  );

  return (
    <div id="smooth-wrapper" ref={main}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmottherGsap;
