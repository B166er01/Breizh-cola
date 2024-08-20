"use client";

import { useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY >= 1800 && scrollPositionY < 2700) {
        setTheme("theme-reverse");
      } else if (scrollPositionY >= 2700 && scrollPositionY < 3600) {
        setTheme("theme-cherry");
      } else if (scrollPositionY >= 3600 && scrollPositionY < 4500) {
        setTheme("theme-stevia");
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
