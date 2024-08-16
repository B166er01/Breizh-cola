"use client";

import AnimateOut from "@/components/AnimateOut";
import Screen from "@/components/section/Screen";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "@/components/ThemeProvider";
import React from "react";

const page = ({ params }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <ThemeChanger />
      <AnimateOut />
      <div
        className={`pt-36 min-h-screen bg-secondColor text-mainColor  ${theme} w-full`}
      >
        product
      </div>
      <Screen />
      <Screen />
      <Screen />
    </>
  );
};

export default page;
