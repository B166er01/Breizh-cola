"use client";

import AnimateOut from "@/components/AnimateOut";
import { useTheme } from "@/components/ThemeProvider";
import React from "react";

const page = ({ params }) => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <AnimateOut />
      <div
        className={`pt-36 min-h-screen bg-secondColor text-mainColor  ${theme} w-full`}
      >
        product
      </div>
      ;
    </>
  );
};

export default page;
