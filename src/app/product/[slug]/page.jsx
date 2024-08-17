"use client";

import React from "react";
import AnimateOut from "@/components/AnimateOut";
import BreizhOriginal from "@/components/experience/views/BreizhOriginal";
import ProductTitle from "@/components/ProductTittle";
import Screen from "@/components/section/Screen";
import ThemeChanger from "@/components/ThemeChanger";
import { useTheme } from "@/components/ThemeProvider";

const page = ({ params }) => {
  const { theme } = useTheme();

  return (
    <>
      <ThemeChanger />
      <AnimateOut />
      <div
        className={`bg-secondColor text-mainColor  ${theme} transition-colors duration-500 min-h-[200vh] w-full`}
      >
        <div id="single" className="w-full min-h-[200vh] ">
          <ProductTitle name={params.slug} />
          <BreizhOriginal />
        </div>

        <Screen />
      </div>
    </>
  );
};

export default page;
