"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTheme } from "../ThemeProvider";

const Navbar = () => {
  const navRef = useRef(null);
  const lastScrollTop = useRef(0);
  const { theme } = useTheme();

  useGSAP(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current && currentScrollTop > 200) {
        // Scrolling down and passed 200px
        gsap.to(navRef.current, { translateY: "-100%", duration: 0.3 });
      } else if (currentScrollTop < lastScrollTop.current) {
        // Scrolling up
        gsap.to(navRef.current, { translateY: "0%", duration: 0.3 });
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`fixed top-0 ${theme} left-0 z-30 flex items-center justify-between w-full h-24 px-6 text-mainColor`}
    >
      <div>
        <div href="/">
          {" "}
          <span className="text-6xl capitalize font-creamCake">
            breizh cola
          </span>
        </div>
      </div>

      <ul className="flex items-center justify-center gap-8 text-2xl capitalize">
        <li>
          {" "}
          <div href="/product/zero">products</div>
        </li>
        <li>
          {" "}
          <div href="/">home</div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
