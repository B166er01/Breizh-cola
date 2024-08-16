"use client";

import AnimateOut from "@/components/AnimateOut";
import BreizhOriginal from "@/components/experience/views/BreizhOriginal";
import ProductTitle from "@/components/ProductTittle";
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
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500 min-h-[3500px] w-full h-screen`}
      >
        <div id="single" className="w-full min-h-[150vh] ">
          <ProductTitle name={params.slug} />
          <BreizhOriginal />
          <div className="w-full min-h-screen ">text</div>
        </div>
      </div>
    </>
  );
};

export default page;
