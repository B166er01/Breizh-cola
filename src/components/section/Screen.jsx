"use client";

import React from "react";
import { useTheme } from "../ThemeProvider";

const Screen = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme}  transition-colors duration-500 w-full h-screen bg-secondColor`}
    >
      Screen
    </div>
  );
};

export default Screen;
