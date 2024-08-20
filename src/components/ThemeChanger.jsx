"use client";

import { useEffect } from "react";
import { useTheme } from "../components/ThemeProvider";

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  /**
   * @layer base {
  :root {
    --mainColor: #fef2f2;
    --secondColor: #450a0a;
  }
  .theme-reverse {
    --mainColor: #450a0a;
    --secondColor: #fef2f2;
  }
  .theme-cherry {
    --mainColor: #fef2f2;
    --secondColor: #721242;
  }
  .theme-stevia {
    --mainColor: #fef2f2;
    --secondColor: #789b2b;
  }

}
   */

  useEffect(() => {
    function handleScroll() {
      const scrollPositionY = window.scrollY;

      if (scrollPositionY > 3300) {
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
