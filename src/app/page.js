"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import ThemeChanger from "./ThemeChanger";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [menuIsActive, setMenuIsActive] = useState(false);
  console.log(theme);

  const mainRef = useRef(null);
  // Use lennis for smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    if (menuIsActive) {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } else lenis.destroy();
  }, []);

  return (
    <>
      <ThemeChanger />
      <main
        ref={mainRef}
        className={`bg-skin-fill text-skin-base  ${theme} transition-colors duration-700 min-h-[3500px]`}
      ></main>
    </>
  );
}
