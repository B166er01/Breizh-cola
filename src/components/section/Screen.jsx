"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

const Screen = () => {
  const screenRef = useRef(null);

  return (
    <div className="w-full h-screen" ref={screenRef}>
      <span>La receete</span>
    </div>
  );
};

export default Screen;
