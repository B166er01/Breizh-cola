"use client";

import { useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    function handleScroll() {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY > 2000) {
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
