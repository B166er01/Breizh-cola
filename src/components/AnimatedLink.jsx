"use client";

import gsap from "gsap";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const AnimatedLink = ({ href, children }) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path
  const { setTheme } = useTheme();

  const animate = () => {
    // Prevent the animation and navigation if the target is the current page
    if (href === pathname) {
      return;
    }

    let TL = gsap.timeline({
      onComplete: () => {
        setTheme("");
        router.push(href);
      },
    });

    TL.to(["#transition0", "#transition1", "#transition2", "#transition3"], {
      top: "0",
      duration: 0.44,
      stagger: 0.12,
    });
  };

  return (
    <div className="cursor-pointer" onClick={animate}>
      {children}
    </div>
  );
};

export default AnimatedLink;
