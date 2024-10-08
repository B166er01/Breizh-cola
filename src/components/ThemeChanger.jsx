"use client";

import { useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY >= 2060 && scrollPositionY < 3140) {
        setTheme("theme-reverse");
      } else if (scrollPositionY >= 3140 && scrollPositionY < 4220) {
        setTheme("theme-cherry");
      } else {
        setTheme(""); // Default theme for other scroll positions
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setTheme]);

  return null;
};

export default ThemeChanger;
