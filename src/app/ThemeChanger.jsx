"use client";

import React, { useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  // Toggle theme on scroll position
  useEffect(() => {
    function handleScroll() {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY > 2080) {
        setTheme("theme-reverse");
      } else {
        setTheme("");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <></>;
};

export default ThemeChanger;
