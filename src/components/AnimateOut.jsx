"use client";

import gsap from "gsap";
import React, { useEffect } from "react";

const AnimateOut = () => {
  useEffect(() => {
    gsap.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
      top: "-100%",
      duration: 0.44,
      delay: 0.35,
      stagger: 0.12,
    });
  }, []);

  return <></>;
};

export default AnimateOut;
